var express = require("express");
var app = express();
app.use(express.static(__dirname,{index:"j2.html"}));

app.use(express.urlencoded());
app.post("/login",(req,res,next)=>{
    res.set("content-type","text/html");
    res.write(`<h1>Welcome ${req.body.un}</h1><h2>Email Id:${req.body.eid}</h2>`);
    next();
});
app.post("/login",(req,res)=>{
    if(req.body.subscribe=="on"){
        res.write(`<h3>Thank You</h3><br><a href="/">Logout</a>`);
    }
    else{
        res.write(`<h3> You can subscribe</h3><a href="/subscribe">subscribe</a>`)
    }
});
app.get("/subscribe",(req,res)=>{
    res.send(`<h3>Thank You<a href="/">Logout</a>`);
});
app.listen(7007);

