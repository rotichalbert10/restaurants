const express= require('express');
const mongoose= require('mongoose');
const app = express();

app.listen(5000,() =>{
   console.log('db connect to port 5000')
})

// const uri="mongodb+srv://ALBERT:123456789@cluster1.m3t07fj.mongodb.net/?retryWrites=true&w=majority"
const uri="mongodb+srv://emmanuelkoros:E37849323k@cluster0.bbuiewe.mongodb.net/?retryWrites=true&w=majority"
async function connect(){
 try{
     await mongoose.connect(uri);
     console.log("connection successful")
 }
 catch(error){
     console.log(error)
 }
}

connect();
   //port connection

