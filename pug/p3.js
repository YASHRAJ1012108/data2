const express=require("express");
const app=express();
app.set("view engine","pug");//template engine set /direct run in p1.pug
app.get("/",(req,res)=>{
    res.render(__dirname+"/p3");
});
app.listen(7003);//ctrl U for see view page source