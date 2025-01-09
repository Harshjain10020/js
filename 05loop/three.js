//for of
// ["",""]
// [{},{}]

const arr = [1,2,3,4]
for (const num of arr) { // just like in java implicit loop i guess for(int i : arr)
    console.log(num);
}

const greet = "hello"
for (const element of greet) {
    console.log(`Each char is ${greet}`);
    
}