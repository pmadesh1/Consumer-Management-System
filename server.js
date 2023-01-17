//Create HTTP server
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path')
const app = express();

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080

//logs every request data 
app.use(morgan('tiny'));

//body-parser
app.use(bodyparser.urlencoded({extended:true}));

// view engine
app.set('view engine', 'ejs');

//ejs,css.js files are placed in different directory sturcture then we need to set the path
//app.set('views',path.resolve(__dirname,"views/ejs"));

app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));

app.get('/',(req,res)=>{
    //res.send("CRUD Application using Mongo DB");
    res.render('index');
})

app.listen(PORT,()=>{ console.log('Server is running on localhost with port',PORT)});