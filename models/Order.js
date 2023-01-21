const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    orderId:{
        type: Number,
        reqired:true
    },
    orderName:{
        type:String,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    },
    shippingAddress:{
        type:String,
        required:true
    },
    shippingDate:{
        type:Date,
        required:true
    },
    orderTime:{
        type:Timestamp,
        required:true
    },
    total:{
        type:Number,
        required:true
    }
});

const order = mongoose.model("order",OrderSchema)
module.exports = order