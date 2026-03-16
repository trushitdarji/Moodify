const mongoose = require("mongoose")

const blacklistSchma = new mongoose.Schema({
    token:{
        type:String,
        required:[true,"token is required for blacklisting"]
    }
},{
    timestamps:true
})
const blacklistModel = mongoose.model("blacklist",blacklistSchma)

module.exports = blacklistModel