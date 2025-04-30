const express=require("express");
const app=express();

app.use(express.static(__dirname,{index:"g3.html"}));
app.get("/calc",(req,res)=>{
    res.set("content-type","text/html");
    var n1=parseInt(req.query.n1);
    var n2=parseInt(req.query.n2);
    var formula=req.query.formula;
    if((n1>0)&&(n2>0)){
        if(formula=="add"){
            res.write("Addition of 2 number="+(n1+n2));
        }
        else if(formula=="sub"){
            res.write(`<h1> Subtraction of 2 number=${n1-n2}</h1>`);
        }
        else if(formula=="mul"){
            res.write(`<h1> multiplication of 2 number=${n1*n2}</h1>`);
        }
        else if(formula=="div"){
            res.write(`<h1> Divison of 2 number=${n1/n2}</h1>`);
        }
        else if(formula=="power"){
            res.write(`<h1> Power of 2 number=${n1**n2}</h1>`);
        }
        else{
            res.write(`<h1>Please select a valid formula</h1>`)
        }
    }
    else{
        res.write(`<h1>Number is not valid</h1>`);
    }
    res.send();
});
app.listen(6002);
