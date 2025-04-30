const express=require("express");
const app=express();

const fun1=(req,res,next)=>{
    // res.set("content-type","text/html");
    res.write("<h1>Fucntion 1 executed</h1>");//h1 and p auto html convert plain to html
    console.log("Fun 1");
    next();
}
const fun2=(req,res,next)=>{
    res.write("<h5>Fucntion 2 executed</h5>");
    console.log("Fun 2");
    next();
}
app.use("/test",fun1,fun2);
app.get("/test",(req,res)=>{
    res.write("<h2>final</h2>");
    res.send();
});
app.listen(6001);