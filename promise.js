// Promises - have 3 states which is below

const { result } = require("lodash")

// Stage 
//  1. Pending
//  2. Fulfilled
//  3. Rejected


// Syntax of Promises 
  // Resolve - Success                                  // Reject - Failure

  // const promise = new Promise((resolve, reject) => {});
  
  // then and catch are method of promise also both are call back function which we use whreever we want to resolve or reject the promise.

  // then();                                            // catch();
  
  // Exmple
  let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if(a == 2) {
      resolve("Success")
    } else {
      reject("Failed")
    }
  })
  promise.then((message) => {
    console.log("This is in then " + message)})
  .catch((message) => {
    console.log("This is in catch " + message)
  })


  // =======================================
  let condition = false;
  let onFullFilled = (resule)=>{
    console.log(resule)}
    let onRejected = (error)=>{
      console.log(error)
    }
  let prom = new Promise((resolve,reject)=>{
    
    if(condition){
      resolve("sahi")      
    }
    else{
      reject("galat")
    }    
  })
  prom.then(onFullFilled)
  .catch(onRejected)


  // =======================================
  function prem(){
    return new Promise((resolve,reject)=>{
      console.log("Fetching data, please wait");

      setTimeout(()=>{
        $.get("https://jsonplaceholder.typicode.com/posts", function(){
          resolve(data);
        }).fail(err =>{
          reject("Fail to load data");
        });
        }, 1000);
    })
  }
  prem().then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })