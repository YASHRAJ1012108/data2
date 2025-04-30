var express = require("express");
var app = express();

    app.use(
        "/xyz",
        (req, res, next) => {
        console.log("request received on"+new Date());
        next();
        },
        (req, res, next) => {
            res.set("content-type","text/html")
            res.write("<h3>Hello</h3>");
            next();
        },
        (req, res) => {
        res.write(`<h5>Tutorial on Middleware</h5>`);
        res.send();
        }
    );
    app.listen(7001)
