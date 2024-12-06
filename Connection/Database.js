const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://muthuhe2:123@cluster0.406b8.mongodb.net/Bekola?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));