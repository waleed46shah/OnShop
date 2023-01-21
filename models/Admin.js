const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminId:{
        type: Number,
        reqired:true
    },
    adminName:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
});

const Admin = mongoose.model("Admin",AdminSchema)
module.exports = Admin