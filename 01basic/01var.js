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


// # Notes on JavaScript Variables

// ## Constants
// - `const`: Used to declare constants in JavaScript. Once assigned, the value cannot be changed.
// ```javascript
// const accountId = 123; // only way to declare const
// ```

// ## Variables
// ### Using `let`
// - `let`: Preferred for variable declarations due to block scope.
// ```javascript
// let accountEmail = "ff@await.com"; // solved scope issue
// ```

// ### Using `var`
// - `var`: Less preferred due to issues with block scope and functional scope.
// ```javascript
// var accPass = "1234";
// ```

// ### Without Declaration Keyword
// - Assigning a value without `let`, `const`, or `var` declares the variable in the global scope.
// ```javascript
// accountCity = "nagpur"; // how this worked
// ```

// ### Undefined Variable
// - Declaring a variable without assigning a value results in `undefined`.
// ```javascript
// let accountState; // undefined
// ```

// ## Best Practices
// - Prefer not to use `var` because of block scope and functional scope issues.
// ```javascript
// /*
// prefer not to use var because of issues in block scope and functional scope
// */
// ```

// ## Reassigning Variables
// - Constants cannot be reassigned.
// ```javascript
// // accountId = 2 // doesn't allow "const"
// ```

// - Variables declared with `let` or `var` can be reassigned.
// ```javascript
// accountEmail = "asd@dsf.sdf";
// accPass = "123asda";
// accountCity = "delhi";
// ```

// ## Logging Variables
// - Using `console.log` to output variable values.
// ```javascript
// // console.log(accountId);
// // console.log(accountEmail);
// // console.log(accPass);
// // console.log(accountCity);
// ```

// - Using `console.table` to display variables in a table format.
// ```javascript
// console.table({accountCity, accPass, accountEmail, accountState});
// ```