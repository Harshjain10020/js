// // // console.log(1);
// // function saymyname(){
// //     console.log("Harsh");
    
// // }
// // // saymyname;//reference 
// // saymyname(); //exceute 

// function add(num1, num2){
//     console.log(num1 + num2);//Nan 
    
// }
// add();//Nan no agrument 
// add(3,7)
// add(3,"7") // conevrt str 
// add(3,"a") // conevrt str 
// add(3,null) // conevrt str 
// function add(num1, num2){
// //    const res = console.log(num1 + num2);
// //     return res;
// return console.log(num1 + num2);
// }
// add(2,2)


function loginUserMessage(username = "john doe // default value if undefined it auto assign"){
        // if(!username){
        //     console.log("PLease enter a username");
        //     return
        if(username == undefined){
            console.log("PLease enter a username");
            return
        }
        return `${username} just logged in`
    }
    console.log(loginUserMessage("harsh"))               //  THE DEAFAULT WE CAN SET EASILY
    // console.log(loginUserMessage("yakuxa"))
    // console.log(loginUserMessage("the game  "))