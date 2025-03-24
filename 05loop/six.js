// const coding = ["js", "ruby", "java", "cpp"];
// // const value = coding.forEach((item)=>{
// //     console.log(item);
// //     return item
// // })
// // console.log(value); // add return to get res ,

// //above doesnt work


// // const myNums = [1,2,34,5,667,8]
// // myNums.filter((num)=>{
// //     console.log(num > 4);
    
// // })

// //filter fucntion takes callback , with conditions it gives return 
// // const newNums = myNums.filter((num)=> num > 4)
// // console.log(newNums);

// // const newNum2 = newNum2.filter((num)=>{
// //    return num > 4; // empty array bbecoz of no return , add return due to scope , as we started {} ,  explicit return values only return in () 
    
// // })
// // //console.log(newNum2);



// const newNums = []
// newNums.forEach((num) =>{
//    if(num > 4){
//       newNums.push(num)
//    }
// })
// console.log(newNums);



/* we use filter more for more thinsg */
const books = [
   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
 ];

 let userbooks = books.filter((bk)=> bk.genre === 'Fiction')
 userbooks = books.filter((bkl) =>{
   return bkl.publish >= 1995 && bkl.genre === 'History' })
 console.log(userbooks);
 