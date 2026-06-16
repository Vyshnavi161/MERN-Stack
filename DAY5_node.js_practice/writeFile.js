//writing in the file
const fs=require('fs');
const student="Name: John\nCourse: MERN";
fs.writeFile('student.txt',student,(err)=>{
    if(err){
        console.error("Error", err);
        return ;
    }
    console.log("File created successfully");
});