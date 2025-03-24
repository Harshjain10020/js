//reduce method
 const myNums = [1,23,34,34,54,5,3,1]

//  const myTotal = myNums.reduce( function (acc, curr_val) {
//     console.log(`acc : ${acc} and curr_val : ${curr_val}`  );
    
//     return acc+curr_val;
//  }, 3 //intializW )
// )


const myTotal = myNums.reduce( (acc, curr_val) => acc+curr_val, 0)
console.log(myTotal);

const shop_cart = [
    {
        item : "js course",
        price : 299
    },
    {
        item : "py course",
        price : 299
    },
    {
        item : "ds course",
        price : 299
    },
]

const cost = shop_cart.reduce((acc, item)=> acc + item.price, 0)

console.log(cost);
