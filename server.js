const bodyParser = require("body-parser");
var express= require("express");
var mongoose=require("mongoose");
var cors=require("cors");
require("dotenv").config();
var app=express();
var router=require("./route/student_route");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

mongoose.connect(process.env.URL, {useNewUrlparser:true})

const db = mongoose.connection;

db.on("connection", () => console.log("error"));
db.once("open", () => {
  console.log("MongoDB connected succesfully");
});

let PORT=process.env.PORT

app.use(router)

app.listen(PORT,function(){
    console.log("Server Started Port with is "+PORT);
});
