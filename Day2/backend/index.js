// 1. importing express
const express = require("express");

// 2. initialising
const app = new express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 3. Api creation
app.get('/',(req,res)=>{
    res.json("Hello, Welcome to Backend")
})
app.post('/signup',(req,res)=>{
    res.send(req.body.name)
})

// 4. setting port
app.listen(3007,()=>{
    console.log("port 3005 is running");

})