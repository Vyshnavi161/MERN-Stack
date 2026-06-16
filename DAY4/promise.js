//promise- 3 states (pending,resolved,rejected)
//having methods like .then() .catch()
let myPromise= new Promise((resolve,reject)=>{
    let sucess=true;
    if(sucess){
        resolve("Login success");
    }else{
        reject("Login Failed");
    }
});
myPromise.then((result)=>console.log(result)).catch((error)=>console.log(error));