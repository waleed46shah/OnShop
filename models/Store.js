const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeId:{
        type: Number,
        reqired:true
    },
    storeName:{
        type:String,
        required:true
    },
    storeDescription:{
        type:String,
        required:true
    },
    storeNiche:{
        type:String,
        required:true
    }
});

const store = mongoose.model("store",StoreSchema)
module.exports = store