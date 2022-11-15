import mongoose from "mongoose"
const user = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: false

    },
    password: {
        type: String,
        required: true
    },
    // age: {
    //     type: Number,
    //     required: true
    // },
    mobile: {
        type: Number,
        required: true
    },
    isemail_verified: {
        type: Boolean,
        required: false,
        default: false
    },
    Number: {
        type: Boolean,
        required: false,
        default: false
    },
    otp:{
     type:Number,
     required:false   
    }

})
const idpass = mongoose.model("users", user)
export default idpass;
