const fs=require('fs')
fs.readFile('student.txt','utf-8',(err,data)=>{
    if(err){
        console.error("Error", err)
        return ;
    } 
    console.log("Student Data");
    console.log(data);
});