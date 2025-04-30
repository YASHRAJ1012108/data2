const express=require("express");
const app=express();
const cp = require("cookie-parser");
app.use(express.urlencoded());

app.use(cp());
app.use(express.static(__dirname,{index:"j4.html"}));
app.post("/next",(req,res)=>{
    res.cookie("fname",req.body.fn);
    res.cookie("lname",req.body.ln);
    res.redirect("/admin");

});
app.get("/admin",(req,res)=>{
    res.clearCookie("lname");
    res.send(`<h1> Welcome ${req.cookies.fname} ${req.cookies.lname}`);

});
app.listen(7003);

