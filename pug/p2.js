const express=require("express");
const app=express();
app.set("view engine","pug");
app.set("views",__dirname);


//template engine set /direct run in p1.pug
app.get("/",(req,res)=>{
    res.render("p2");
});
app.listen(7003);//ctrl U for see view page source
// Buffered
// - unbuffered
//
    multi 
    line
|bufferd     
    Comment
//- 
    unfuffered
    multi

