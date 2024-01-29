const rightModel = require("../models/rightModel");

module.exports = {
    create: async(req,res)=>{
       const right = await rightModel.create({
        staff_id:req.body.staff_id,
        right:req.body.right,
       }) 
        const rightData = await right.save();
       return res.send(rightData);
    },

    staffByRight: async(req,res)=>{
        const rightData = await rightModel.find({
            _id:req.body.right_id
        }).populate("staff_id", "email") // key dalni rhti hai 
        res.send(rightData);
    }
}