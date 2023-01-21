const { Binary } = require('mongodb');
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productId:{
        type: Number,
        reqired:true
    },
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    averageStars:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    reorder:{
        type:Boolean,
        required:true,
    },
    image:{
        type:Binary,
        required:true
    }
});

const product = mongoose.model("product",ProductSchema)
module.exports = product