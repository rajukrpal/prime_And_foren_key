const mongoose = require("mongoose");
 const staffSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },

 },{timestamps:true});

 module.exports = mongoose.model("staff",staffSchema);