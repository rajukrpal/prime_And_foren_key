const staffModel = require("../models/staffModel");
const staff = require("../models/staffModel");


module.exports = {
    create: async(req,res)=>{
        const {name,email} = req.body;
        const staff = await staffModel.create({
            name,
            email
        })
        return res.send(staff)
    }
}