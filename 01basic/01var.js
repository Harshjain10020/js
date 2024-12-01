const accountId = 123; // only way to declare const
// two ways let var for variable ; less use var , due to scope {} things btw scope , earlier js doeswt work on scope
let accountEmail = "ff@await.com"//solved scope wala prb
var accPass = "1234"
accountCity = "nagpur" // how this worked 
let accountState;//undefined 
/*
prefer not to use var bcoz of issue in block scope and functional scope */
// accountId = 2 //doesnt allow "const"
accountEmail = "asd@dsf.sdf"
accPass = "123asda"
accountCity = "delhi"
// console.log(accountId);
// console.log(accountEmail);
// console.log(accPass);
// console.log(accountCity);

//u can use table 
console.table({accountCity,accPass,accountEmail,accountState})