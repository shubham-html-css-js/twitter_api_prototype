const express=require('express')
const axios=require('axios');
const { response } = require('express');
const Twitter=require('./api/helpers/twitter.js');
const twitter=new Twitter();
app=express();
require('dotenv').config();
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
})
app.use('/tweets',(req,res)=>
{ 
    q=req.query.q;
    count=req.query.count;
    maxId=req.query.max_id;
twitter.get(q,count,maxId).then((response)=>{
       //console.log(response.data);
       res.status(200).send(response.data);

   }).catch((error)=>
   {
       console.log(error);
   });   
})

app.listen(3000,console.log("Listening on https://localhost:3000"));