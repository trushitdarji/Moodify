const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../config/cache");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const ifUserExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (ifUserExists) {
    return res.status(400).json({
      message: "username or email already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "3d",
    },
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User Registerd successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}
async function loginContoller(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email }).select("+password");

  if (!user) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const isPassMatch = await bcrypt.compare(password, user.password);

  if (!isPassMatch) {
    return res.status(400).json({
      message: "invalid credentials",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "3d" }
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

async function getMe(req, res) {
  const user = await userModel.findById(req.user.id);

  res.status(200).json({
    message: "user fetched successfully",
    user,
  });
}

async function logoutUser(req, res) {
  const token = req.cookies.token;

  res.clearCookie("token");

  await redis.set(token, Date.now().toString(), "EX", 60 * 60);

  res.status(200).json({
    message: "logout",
  });
}

module.exports = {
  registerController,
  loginContoller,
  getMe,
  logoutUser,
};
