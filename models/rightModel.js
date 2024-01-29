const mongoose = require("mongoose");
const rightSchema = new mongoose.Schema({
  
    staff_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"staff"
    },
    right:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("right",rightSchema);