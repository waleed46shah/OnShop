const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    sellerId:{
        type: Number,
        reqired:true
    },
    sellerCnic:{
        type:String,
        required:true
    },
    sellerName:{
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
    },
    storesOwned:{
        type:Number,
        required:true
    }
});

const Seller = mongoose.model("Seller",SellerSchema)
module.exports = Seller