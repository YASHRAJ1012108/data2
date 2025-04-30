const express=require("express");
const app=express();
    app.use(express.urlencoded());
    app.use(express.static(__dirname,{index:"g5.html"}));//only use static for use css of html file
    app.post("/login",(req,res)=>{
        un=req.body.un;
        ps=req.body.ps;

        if(un=="admin" && ps=="ramu"){
            res.send(`<h1 style="color:blue">Welcome ${un}</h1>`);
        }
        else{
            res.send(`<h1 style="color:red">Not an admin</h1>`);

        }

        res.send();
    })
    app.listen(5001);
