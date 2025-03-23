const coding = ["js", "ruby", "java"];
// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value); // add return to get res ,

//above doesnt work


const myNums = [1,2,34,5,667,8]
// myNums.filter((num)=>{
//     console.log(num > 4);
    
// })
//filter fucntion 
const newNums = myNums.filter((num)=> num > 4)
console.log(newNums);

const newNum2 =myNums.filter((num)=>{
   return num > 4; // empty array bbecoz of no return , add return due to scope , as we started {} ,  
    
})
console.log(newNum2);
