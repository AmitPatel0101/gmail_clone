const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profilePhoto : {
        type : String,
        require : true
    }
}, {timestamps : true})

const User = mongoose.model("user", userSchema);

module.exports = User;