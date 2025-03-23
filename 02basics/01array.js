const myarray1 = [0,1,1,2,3,4,true , "hi"]
const myarray = [0,1,1,2,3,4,]
//resizable
//can have mix type
//array cannot be using arbitary string , only access thr u arr[i] , not arr["a"]
//0 indexing 
// change in copied array will have changes in mainn array 


const myHero = ["daredevil", 'batman']

const myarr3 =  new Array(1,2,3,4)
// console.log(myarr3[3]);

//array methods 
// myarray.push(6)
// myarray.push(7)
// myarray.pop()
// myarray.unshift(9)
// myarray.shift()
// console.log(myarray)
// console.log(myarray.includes(9));//boolean typ 
// console.log(myarray.indexOf(9));//index typ 
// const newArr = myarray.join()
// console.log(myarray);
// console.log(newArr);
// console.log(typeof newArr);


//slice , spilce 

// console.log("A ", nums);           

// const myn1 = nums.slice(1, 3)          //  use to get the element according to the range without changing the original array

// console.log(myn1);
// console.log("B ", nums);


// const myn2 = nums.splice(1, 3)       //  use to get the element according to the range(also includes the last of range) and changing the original array
// console.log("C ", nums);
// console.log(myn2);

//*********************************************************************************************************/

const mhero = ['thor', "ironman"]
const dchero = ['robin', "batman"]
//mhero.push(dchero)
// console.log(mhero);//[ 'thor', 'ironman', [ 'robin', 'batman' ] ] added as 3rd elemnt
// console.log(mhero[2][0]);

// for(let i=0;i<dc_heros.length;i++)       // we can use loop to push every element of an array to another array
// marvel_heros.push(dc_heros[i])
// console.log(marvel_heros)


const allHeros = mhero.concat(dchero)           //  use to conact two array (working like loop push evey element of array to new index )
console.log(allHeros);

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)             //  push array like single element in the another array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



// for(let i=0;i<dc_heros.length;i++)       // we can use loop to push every element of an array to another array
// marvel_heros.push(dc_heros[i])
// console.log(marvel_heros)



// const allHeros = marvel_heros.concat(dc_heros)           //  use to conact two array (working like loop push evey element of array to new index )
// console.log(allHeros);



// const y = [...marvel_heros, ...dc_heros]          //  another way to add(concat) many array
// console.log(y);


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const x = another_array.flat(Infinity)      // convert all nested array into simple array
// console.log(x);




console.log(Array.isArray("Hitesh"))                 // return true or false
console.log(Array.from("Hitesh"))                   //  convert string into char array
console.log(Array.from({name: "hitesh"}))          // interesting  provide the null

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));
