const myNum = [1,23,3,4,3,4,45,6,5,65,6]


//Map doeesnt require to return , it returns automatically
// const newNum = myNum.map( (num) => {
//    return num+10
// })

// console.log(newNum);


// const newNum = myNum.map( (num) => num+10)
// console.log(newNum);


//chaining map and filter
const newNum = myNum
                    .map( (num) => num * 10) // f1rst element 1 
                    .map( (num) => num+10 ) // first element her is 10
                    .filter((num) => num>100)
console.log(newNum);
