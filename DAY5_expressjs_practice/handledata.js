const express=require('express');
const app=express();
app.get("/student",(req,res)=>{
    const student={
        id:100,
        name:"XXX",
        course:"MERN"
    };
    res.json(student);
});
app.listen(5000)