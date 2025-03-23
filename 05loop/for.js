 //for
// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     if (element == 5) {
// //         console.log("5 is bad number");
// //     }
// //     console.log(element);
    
// // }
// // //console.log(element);

// for (let i = 0; i < 5; i++) {
//     //console.log(`Outer loop value : ${i}`);
    
//     for (let j = 0; j < 5; j++) {
        
//         // console.log(`inner loop value : ${j}`);
//         console.log(i+'*'+j+'=' + i*j);
 // process.stdout.write('*');                          //  use process.stdout.write() to print the pattern instead console.log()
        
//     }
    
// }


// let myArray = ["a", "b", "C"]
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
    
// }


// break and continue

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${i}`)
    
// }

// for (let i = 1; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//    console.log(`Value of i is ${i}`);
// }
const myObject = {
    js: "javascript",
    cpp : "c++",
}
for( const key in myObject){
    // console.log(key);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    
}


//array iteration using for in 
const arr = ['a','a','b','f']
for (const key in arr) {
   console.log(key);// placevalue
   console.log(arr[key]);
   
   
}
