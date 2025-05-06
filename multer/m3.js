//npm i multer
//npm config set proxy http://192.168.10.252:808
const express=require("express");
const app=express();
const multer=require("multer");
app.use(express.static(__dirname,{index:"m1.html"}));
var store=multer.diskStorage({//diskstored local disk store
    destination:"lju",
    filename:function(req,file,cb){
        cb(null,"test.png")
    }
});
var upload=multer({storage:store,limits:{fileSize:1*1024}});//10*1024*1024 10mb
app.post("/data",upload.single("mypic"),(req,res)=>{
    const file=req.file;
    console.log(file);
    if(file){
        res.send(`<h1>File Uploaded</h1>`);
    }
});
app.listen(3001);