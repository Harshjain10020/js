// fetch('https://jsonplaceholder.typicode.com/posts').then().catch().finally();

//CREATE PROMISE
const promiseOne = new Promise(function (resolve, reject) {
  //do sync task
  //db cryptography, network
  setTimeout(function () {
    console.log("Async taSK IS COMPLETE");

    //to connect resolve
    resolve();
    //now resolev consumed promise used completely
  }, 1000);
});

//conmsumption of promise

promiseOne.then(function () {
  console.log("promise consumed");
});

//2nd syntax
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("aysnc task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved ");
});

//3rd run with parameter
const promise3rd = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Harsh", email: "aa@aa.aa" });
    console.log("Async 3 done");
  }, 1000);
});

promise3rd.then(function (user) {
  console.log(user);
});

//4th
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Tarsh", email: "bb@aa.aa" });
      console.log("Aync 4 is done");
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is ethier resolved or rejcted"));

//promise 5

const promise5 = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "js", pass: "pass" });
      console.log("Aync 5 is done");
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumepromise5() {
 try {
     const response = await promise5;
  console.log(response);
 } catch (error) {
    console.log(error);
    
 }
}
consumepromise5();




// async function getAlluser() {
//     try {
//         const response = await fetch('https://api.github.com/users/harshjain10020')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
    
// }
// getAlluser()

fetch('https://api.github.com/users/harshjain10020').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=> console.log(error)
)