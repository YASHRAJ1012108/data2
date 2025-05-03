const express=require("express");
const app=express();
app.use(express.urlencoded());
app.set("view engine","pug");//template engine set /direct run in p1.pug
app.get("/",(req,res)=>{
    res.render(__dirname+"/p4");
});
app.post("/data",(req,res)=>{
    res.render(__dirname+"/output",{uname:req.body.un,email:req.body.eid,branch:req.body.branch});

});
app.listen(7003);//ctrl U for see view page source
// speedd=d/this
// 2 train 1 len-x speed -90 45s brid cros 2-x-100len 