const express = require('express');
const mongoose = require('mongoose')

const port = 3001;
const url = "mongodb+srv://waleed:waleed@onshoppk.d0rfo82.mongodb.net/fyp?retryWrites=true&w=majority";
const app = express();
const SellerModel = require('./models/Seller')
app.use(express.json())

mongoose.connect(url,{
  useNewUrlParser:true

});

app.get('/',async(req,res)=>{
    const seller = new SellerModel({sellerId: '2',sellerCnic:'54321',sellerName:'def',address:'uvw',zipcode:'24000',phoneNumber:'076-31254',storesOwned:'1'});
    try{
      await seller.save();
    }catch(err)
    {
      console.log(err)
    }
})

app.listen(port,()=>{
    console.log('Server is listening on port:',port)
});



// // create a client for the MongoDB connection
// const client = new mongodb.MongoClient(url, { useNewUrlParser: true });

// // connect to the MongoDB server
// client.connect(err => {
//   if (err) {
//     console.error(err);
//     process.exit(1);
//   }
//   console.log("Connected to MongoDB");
// });
