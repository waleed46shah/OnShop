const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    quantity:{
        type: Number,
        reqired:true
    },
    isEmpty:{
        type:Boolean,
        required:true
    },
    Promo:{
        type:String,
        required:true
    }
});

const cart = mongoose.model("cart",CartSchema)
module.exports = cart