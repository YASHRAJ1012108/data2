const express=require("express");
const app=express();
const api=require("./api")//. relative path must
app.use("/studentdata",api);
app.listen(8001);//default path:localhost:8001/studentdata get-exact path compare
