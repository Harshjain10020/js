//for of
// ["",""]
// [{},{}]

// const arr = [1,2,3,4]
// for (const num of arr) { // just like in java implicit loop i guess for(int i : arr)
//     console.log(num);
// }

// const greet = "hello"
// for (const element of greet) {
//     console.log(`Each char is ${greet}`);
    
// }
// //map
const map = new Map()
map.set('IND',"India" )
map.set('IN',"India" )
map.set('US',"united states" )
//console.log(map);
for( const [key, value] of map){
    //console.log(key);
    console.log(key, ':-', value);
    
}


//map is not ierable like this 

// for (const key in map) {
//     console.log(key);
    
// }
/******************************* */ /** */
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'spiderman'
// }
// for  (const key of myObject) {
//     console.log(element);
    
// }
//object not iterable using for 