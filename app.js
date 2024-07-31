// const os = require("os");
// const fs = require("fs");
// const path = require("path");

// const desktoppath = path.join(os.homedir(), "OneDrive", "Desktop");

// // fs.mkdirSync(path.join(desktoppath, "TASK FOLDER"));

// const htmlboilderplate = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
    

//     <script src="script.js"></script>
// </body>
// </html>`

// const cssboilerplate = `*{
// margin: 0;
// padding:0;
// box-sizing : border-box;
// }
// html, body{
// width : 100%;
// height : 100%;
// }`

// fs.writeFileSync(path.join(desktoppath, "TASK FOLDER", "index.html"), htmlboilderplate);
// fs.writeFileSync(path.join(desktoppath,"TASK FOLDER", "style.css"), cssboilerplate);
// fs.writeFileSync(path.join(desktoppath, "TASK FOLDER", "script.js"), " ");


// ------------------------------------------------------------------------------------------------------

const dotenv = require('dotenv');
dotenv.config({path: "./.env"});

const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger('combined'));


const indexRoutes = require('./Routes/indexRoutes');
app.use("/", indexRoutes);


app.get("/middleware", isAuthenticate, (req, res)=>{
    res.json({message: "aage jaane do"});
})

function isAuthenticate(req, res, next){
    if(res.headers.token === "sb bdiya hai"){
        next();
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
}

app.listen(process.env.PORT, ()=>{
    console.log(`we are currently live on PORT : ${process.env.PORT}`);
})