//singleton or constructor 

const tinderuser = new Object()//singelton object
// const tinder = {}//non singleton or literal
tinderuser.id ="123asdaf"
tinderuser.name = "harsh"
tinderuser.islogin = false


// console.log(tinderuser);
const regUser = {
    name: "harsh",
    email : "hh@sds.sds",
    fullname : {
            firstName : "Harsh",
            lastname : "Jain"
    }
}
// console.log(regUser.fullname?.firstName);//? use to protect it chk if available or not requested thing 

const obj1 = {
    1:"a", 2: "b"
}
const obj2 = {3: "a", 4:"d"}
const obj3 = {obj1,obj2}
// console.log(obj3);
// const obj4 = Object.assign({},obj1,obj2) //{} is empty array added as precaution , not compulaory , if not then all value to obj1 
const obj4 = {...obj1,...obj2}//spread
console.log(obj4);

const user = [
    {
        id : 1,
        email : "asd@.asda"
    },
    {
        
    },
]
// console.log(user[0].id);

console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));


console.log(tinderuser.hasOwnProperty('id'));//use for to chk if property is present or not 






