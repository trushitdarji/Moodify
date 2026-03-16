const mongoose = require("mongoose");

function ConnectDB() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database Connected");
    })
    .catch((err) => {
      console.log("datasbe not connected", err);
    });
}
module.exports = ConnectDB;
