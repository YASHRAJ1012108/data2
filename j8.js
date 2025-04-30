// 2.	write a script to meet following requirements:
// a.	Create index.html file page which contains form(username,password,login button). and open it on localhost.
// b.	After clicking submit button, it should jump on “savesession” page. Store username and password in session.
// c.	After saving session, redirect to “fetchsession” page and read value. Put a LOGOUT link button here.
// d.	Jump on delete session page after clicking LOGOUT button. 
// e.	Destroy the session on this page and redirect to index.html page.

var express=require("express");
var app=new express();
const es=require("express-session");
app.use(es({secret:"abc123",resave:false,saveUninitialized:false}));//saveun-false-sesion genereated means meaning full save karse means login so its created new session
app.use(express.static(__dirname,{index:"j7.html"}));
app.use(express.urlencoded());
app.post("/savesession",(req,res)=>{
    req.session.uname=req.body.un;
    req.session.pass=req.body.pw;
    res.redirect("fetchsession");
    app.get("/fetchsession",(req,res)=>{
        if(req.session.uname=="admin" && req.session.pass=="admin@123"){
            res.send(`<h3 style="color:red">Welcome ${req.session.uname}  ${req.session.pass}</h3> <a href="/deletesession">Logout</a>`);

        }
        else{
            res.send(`<h1 style="color:red">Please enter valid username and password </h1>`);

        }
    });
    app.get("/deletesession",(req,res)=>{
        req.session.destroy();
        // req.send(`<h3> ${req.session.uname}</h3> <a href="/">Login</a>`);//error because our session deleted
        res.send(`<h3> Your session deleted succesfully</h3> <a href="/">Login</a>`);//error because our session deleted
        res.redirect("/");
    });
});
app.listen(7008);//default cookie value is connect-sid when session created here session deleted but cookie not deleted
    // app.get("*",(req,res)=>{ pagen not found error throw if page not found
    //     res.status(404).send("Page not found");
    //     //or
    //     res.sendStatus(404);

    // });