const express=require("express");
const app=express();
const cp = require("cookie-parser");
app.use(cp());
app.get("/abc",(req,res)=>{//res browser req server so cookie also browser
    res.cookie("name","Express JS");
    res.cookie("email","a@gmail.com",{maxAge:10000});
    res.cookie("branch","CSE",{expires:new Date(Date.now()+7000)});
    res.cookie("city","ahmedabad");
    res.cookie("age","30");
    res.clearCookie("age");
    res.send(req.cookies);//object of cookie
});app.listen(7001);