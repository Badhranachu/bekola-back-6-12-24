const mongoose=require("mongoose")
let sc=mongoose.Schema;
const loginSchema = new sc({
    username:String,
    password:String,
    Role: {
        type: String,
        default: "user"
    }
});

var loginmodel=mongoose.model("Logins",loginSchema)
module.exports=loginmodel;