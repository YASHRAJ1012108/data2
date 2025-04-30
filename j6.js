//session stored in server and manualy deleted 
const express=require("express");
const app=express();
const es=require("express-session");
app.use(es({secret:"LJU123",resave:false,saveUninitialized:false}))//saveun-false-sesion genereated means meaning full save karse means login so its created new session
//resave-false-modification occur(necessary) then it resave it
app.get("/",(req,res)=>{
    if(req.session.page_views){//page_views-user defined
        req.session.page_views++;
        res.send(`<h1 style="color:blue;text-align:center">You have visited ${req.session.page_views}</h1> `)
    }
    else{
        req.session.page_views=1;
        res.send(`<h1 style="color:blue,text-align:center">Thank You visiting oru webside</h1> `);
    }
});
app.listen(7008);
//connect.sid cookie created
