// //primitive 
// // 7 type str num boolean  null long undefined Symbol BigINT

// //dynamic type 

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;//undefined

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 3456543576654356754n

// //reference type non primitive 
// // arr objects function 
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "harsh",
    age: 21,
}

const myfunc = function () {
    console.log("hello");
    
}

console.log(typeof heros);
console.log(typeof myfunc);
// https://262.ecma-international.org/5.1/#sec-11.4.3



////////=============================
//stack heap memory 
//primitive type = stack memory  we get a copy of value 
// non primitive heap // 

// Memory in javascript
// stack(Primitive data)(in stack there is copy in memory and change easily also the previous will not change) 
// heap (non primitive || reference (array , function, object)) (they use heap memory and have the reference if we update any thing both will changes)

// let x = 99;
// let y = x
// y = 199;
// console.log(x)    // in this case primitve data tpye and use stack memory (changes is copy data not original)
// console.log(y)

let user1 = {
    email : "hh@WebGLProgram.ss",
    upi : "9asdaweq@ybl"
}
let user2 = user1
user2.email = "aharsh@gash.csda"

console.log(user1);
console.log(user2);

// let nums = {
// name: "dushyant",
// height: "183cm",
// networth: 348764123473816,
// }
// let newnums = nums;

// newnums.height = "191cm"
// newnums.networht = 574578326587245;

// console.table([nums.name , nums.height , nums.networht])                   // this is non primitive data type and heap is used (reference changes in orginal data)
// console.table([newnums.name , newnums.height , newnums.networht])
