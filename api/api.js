const express=require("express");
const router=express.Router();
var data=[
    {   "id":"1",
        "name":"ABCD",
        "age":"20",
        "branch":"cse"
    },
    {   "id":"2",
        "name":"Ram",
        "age":"21",
        "branch":"it"
    },
    {   "id":"4",
        "name":"sarvesh",
        "age":"20",
        "branch":"it"
    }
    ]
    router.get("/",(req,res)=>{
        res.set("content-type","text/html");
        for(d of data){
            res.write(`<h1> Name:${d.name} Age:${d.age} Id:${d.id}</h1>`)

        }
        res.send();
    });

    router.get("/id/:id",(req,res)=>{
        var d=data.filter((d1)=>d1.id==req.params.id);
        // document.write(d1);
        if(d.length>0){
            res.send(`<h1> ${d[0].name} ${d[0].branch}</h1>`)
        }
        else{
            res.send(`<h1> NO data available</h1>`)
        }
        
    });
    router.get("/branch/:branch",(req,res)=>{
        var d=data.filter((d1)=>d1.branch.toLowerCase()==req.params.branch.toLowerCase());
        // document.write(d1);
        if(d.length>0){
            res.send(d);
        }
        else{
            res.send("No data available")
        }
        
    });
module.exports=router;
