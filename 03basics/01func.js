// // // // // console.log(1);
// // // // function saymyname(){
// // // //     console.log("Harsh");
    
// // // // }
// // // // // saymyname;//reference 
// // // // saymyname(); //exceute 

// // // function add(num1, num2){
// // //     console.log(num1 + num2);//Nan 
    
// // // }
// // // add();//Nan no agrument 
// // // add(3,7)
// // // add(3,"7") // conevrt str 
// // // add(3,"a") // conevrt str 
// // // add(3,null) // conevrt str 
// // // function add(num1, num2){
// // // //    const res = console.log(num1 + num2);
// // // //     return res;
// // // return console.log(num1 + num2);
// // // }
// // // add(2,2)


// // function loginUserMessage(username = "john doe // default value if undefined it auto assign"){
// //         // if(!username){
// //         //     console.log("PLease enter a username");
// //         //     return
// //         if(username == undefined){
// //             console.log("PLease enter a username");
// //             return
// //         }
// //         return `${username} just logged in`
// //     }
// //     console.log(loginUserMessage("harsh"))               //  THE DEAFAULT WE CAN SET EASILY
// //     // console.log(loginUserMessage("yakuxa"))
// //     // console.log(loginUserMessage("the game  "))

// //shopping cartt , user just add with no limit 

// // function calCartPrice(...num1){
// //     return num1
// // }
// // console.log(calCartPrice(200, 400, "HArhs" ));
// // //rest operator ... or spread operator it will add more if user adds more 


// // function calCartPrice(var1, var2, ...num1){
// //     //here var1 = 200 , var2 = 400
// //     console.log(var1);
    
// //     return num1
// // }
// // console.log(calCartPrice(200, 400, "HArhs" ));








// //object 
// const user = {
//     username : "Harhs",
//     price: " 22020202020202020202020202020"
// }

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
// }

// // handleObject(user)
// handleObject({
//     username : "yakuza", price: "399"
// })

// const myNewarray = [ 200,2003,300]

// function returnArray(getArray){
//     return getArray[2]
// }
// // console.log(returnArray(myNewarray));
// console.log(returnArray([ 200,2003,300]));



//******************************************Arrow function */

//here "this keyword " current context ko refer karta h
const user = {
    username: "harsh",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to web`);
        console.log(this);
        
    }

}

// user.welcomeMsg()
// user.username = "Tanu"//context changed here from harsh to tanu
// user.welcomeMsg()
// console.log(this); //curr context is empty

//in browser global object is windows but in here it is empty as we didnt declare something 
// function chai(){
//     let username = "harsh"
//     console.log(this);//too much value given here 
//     console.log(this.username);//undefined
    
// }
// chai()



// same 
// const chai = function(){
//     let username = "harsh"
//          console.log(this.username);
// }
// chai();


// //aroow func 
// const chai = () => {
//     let username = "harsh"
//          console.log(this);//empty parathesis 
// }
// chai();



/**basic implemen */ //explicit return req return ststement 
// const addt= (num1 , num2) => {
//     return num1+num2;
// }

//implicit return 
// const addt= (num1 , num2) =>  num1+num2
// const addt2= (num1 , num2) =>  (num1+num2)
const addt2= (num1 , num2) =>  ({username:"harsh"})

console.log(addt2(2,3))


