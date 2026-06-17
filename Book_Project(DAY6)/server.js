// const express= require("express");
// const cors=require("cors");
// const app=express();
// require("./db");
// app.get("/",(req,res)=>{
//     res.send(
//         "Server Running"
//     );
// });
// app.listen(5000,()=>{
//     console.log(
//         "Server Running On Port 5000"
//     );;
// })

//main one
const express=require("express");
const cors=require("cors");
const app=express();
require("./db");
app.use(cors());
app.use(express.json());
app.use(
    express.static("public")
);
//import route
const bookRoutes=require("./routes/books");
const router = require("./routes/books");

//connect route
app.use(
    "/api/books",
    bookRoutes
);
app.get("/",(req,res)=>{
    res.send(
        "Library server Running"
    );
});
app.listen(5000,()=>{
     console.log(
         "Server Running On Port 5000"
     );;
 })