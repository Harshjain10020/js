//Dates 
let myDate = new Date();
//console.log(myDate);//2024-12-06T18:46:28.041Z
// console.log(myDate.toDateString());//Fri Dec 06 2024
// console.log(myDate.toISOString());//2024-12-06T18:46:28.041Z
// console.log(myDate.toLocaleDateString());//2/6/2024
// console.log(myDate.toLocaleString());//12/6/2024, 6:46:28 PM

// let myCreatdate = new Date(2024, 6, 29,5,3);
let myCreatdate = new Date("2023-01-14");
// console.log(myCreatdate.toDateString());
// console.log(myCreatdate.toLocaleString());
// console.log(myCreatdate.toLocaleString());
let mytimestamp = Date.now()
// console.log(mytimestamp);
// console.log(myCreatdate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
newDate.toLocaleString('default',{
    weekday: "long",
})

console.log(newDate)


