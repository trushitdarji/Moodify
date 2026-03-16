const cookieParser = require("cookie-parser")
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))


// authRoute
const authRoutes = require("./routes/auth.route")
const songRoutes = require("./routes/song.route")

// api
app.use("/api/auth",authRoutes)
app.use("/api/songs",songRoutes)

module.exports = app