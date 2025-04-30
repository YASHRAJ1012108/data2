const express=require("express");
const app=express();
    app.use(express.urlencoded());
    app.get("/",(req,res)=>{
        res.sendFile(__dirname+"/g4.html");
    })
    app.post("/data",(req,res)=>{
        res.write(JSON.stringify(req.body));
        res.write(req.body.fn+" "+req.body.ls);
        res.send();
    })
    app.listen(5001);
