const coding = ["js", "ruby", "java"];

// coding.forEach( function (item){
//       console.log(item);

// })

// coding.forEach( (val)=>{
// console.log(val);

// })

// function printMe(item){
//     console.log(item);

// }
// coding.forEach(printMe)

// coding.forEach((val , indexed, arr)=>{
//     console.log(val, indexed, arr);

// })


//acces in arrays , used in DB 
const mycode = [
  {
    langname: "js",
    filname: "file.js",
  },

  {
    langname : "ruby",
    filname : "file.rb"
  },
    {
        langname : "java",
        filname : "file.java"
    }

];

mycode.forEach((item) =>{
    console.log(item.langname);
    
})
