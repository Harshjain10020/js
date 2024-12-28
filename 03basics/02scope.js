
//var c = 300                   // var can't able to differ global and block scope
// let a = 300
// if (true) {
//     let a = 10                     // block or local scope the declare inside {} of condition or function etc
//     const b = 20
//     // console.log("INNER: ", a);
    
// }
// console.log(a);               //  global scope just like global variable in cpp 
// console.log(b);
// console.log(c);
//{}anything between scope
// var c = 300
// if(true){
//     let a= 10
// const b = 20
// var c = 20// this is global can be acces anywher 
// }

// console.log(c);
// console.log(b);

// function one(){
//     const username = "harsh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
// }

// one()
//inner function can access outer func var , const 

// if(true){
//     const user1 = "Harsh"
//     if(user1=="Harsh"){
//         const website1 = "youtube"
//         console.log(user1 +website1);
        
//     }

//     // console.log(website1); // //error 2
    
// }
// // console.log(user1);// //error 1

//+++++++++++++++++++++++++++++++++++++++++++//


//type 1 to declare func , here we can access before also 
//addone(5)
function addone(num){
    return num+1;
}
addone(5)

//2nd way to write not able to exceute before declarartion 
//addtwo(5);
const addtwo = function(num){
    return num+2;
}
