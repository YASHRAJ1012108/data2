//npm i multer
//npm config set proxy http://192.168.10.252:808
const express=require("express");
const app=express();
const multer=require("multer");
app.set("view engine","pug");
app.get("/",(req,res)=>{
    res.render(__dirname+"/m2");
});


var store=multer.diskStorage({//diskstored local disk store
    destination:"lju",
    filename:function(req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);//unique name if same name last value accept only
    }//file.fieldname but if same name it ignore all file and only accceprt only one
});
var upload=multer({storage:store});
app.post("/data",upload.array("mypic",5),(req,res)=>{
    const file=req.files;//dont use body because of file object
    console.log(file);
    if(file){
        for(i of file){
        res.write(`<h1>${i.originalname} has been uploaded in ${i.destination}</h1>`);
    }res.send();
}
});
app.listen(3001);
