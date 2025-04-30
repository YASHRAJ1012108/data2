//imp 
const express=require("express");
const app=express();
const cp = require("cookie-parser");
app.use(express.static(__dirname,{index:"j5.html"}));

app.use(cp());
app.get("/submit",(req,res)=>{
    var {un,eid,msg,fb}=req.query;
var feedback={un,eid,msg,fb};
res.cookie("feedback",feedback,{maxAge:10000});
res.send(`<h1>Thank you <h1> <a href="/details">Details</a>`);
});
app.get("/details",(req,res)=>{
    const fb=req.cookies.feedback;
    if(fb){
        res.send(`<h1>${fb.un}<br>${fb.eid}<br>${fb.msg}<br>${fb.fb}</h1>`);
    }
    else{
        res.send(`<h1>No feedback available</h1>`);
    }
});
app.listen(7008);
