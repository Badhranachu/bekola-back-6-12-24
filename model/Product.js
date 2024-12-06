const mongoose=require("mongoose")
let sc=mongoose.Schema;
const ProductSchema = new sc({
   Pname:String,
    Price:Number,
    Desc:String,
Cid:{type:mongoose.Schema.Types.ObjectId,ref:'Categories'},
photo:{
    data :Buffer,
    contenttype: String,

},
    Status:String,
});

var Productmodel=mongoose.model("Products",ProductSchema)

module.exports = Productmodel;