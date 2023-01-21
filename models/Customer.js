const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    customerId:{
        type: Number,
        reqired:true
    },
    customerCnic:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }
});

const customer = mongoose.model("customer",CustomerSchema)
module.exports = customer