// //two ways to declare object , literal , constructor 
// //singleton by constructor 

// //object literals
// //symbol
// const mySym = Symbol("key1")
// Object.create //construitcors 
// const jsUser = {
//     name: "Harsh",
//     age : 18,
//     [mySym] : "key1",
//     location : "ngp",
//     login : false,
//     lastlogin : ["monday", "saturday",],
//     "full name": "Harsh Jain",
// }


// // console.log(jsUser.age);
// // console.log(jsUser[mySym]);//  declare the symbole in saqure brakect or refer symbole use []
// // // console.log(typeof jsUser.mySym);
// // console.log(jsUser["age"]);// in this type we have to give the variable in the  string form
// // console.log(jsUser["full name"]);
// // jsUser.age = 19;// also we can easily over wte the value
// // console.log(jsUser.age);
// // Object.freeze(jsUser)// after the freez we can't change the value or can't overwrite
// // jsUser.age = 21
// // console.log(jsUser);

// console.table(jsUser) ////  there are many ways to declare the object  using table format


// // myArr = ["h","a"]

// jsUser.greeting = function(){
//     console.log("hello Harsh");

    
// }
// jsUser.greeting2 = function(){
//     console.log(`hello Harsh, ${this.age}`);

    
// }
// console.log(jsUser.greeting2());
