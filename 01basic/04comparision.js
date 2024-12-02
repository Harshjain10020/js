// console.log(2>1);
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2">1);//true js converted it 
// console.log("02">1);//true js converted it 

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);
/* reason is that equality check == and comparison works differently , comp convert null to number and assign 0 that why null>=0 is true and null> 0 is false */

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);
//avoid above conversion

//=== strict check chks data type 
console.log("2"=== 2);
console.log("2"== 2);
