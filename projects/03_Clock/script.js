//document.getElementById('clock')
const clock = document.querySelector('#clock');

// let date = new Date()
// console.log = (date.toLocaleTimeString());
//to contniously update thing 
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);