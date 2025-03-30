
// const weight = document.querySelector('#weight') this will give empty valyue at start 
const form = document.querySelector('form')
form.addEventListener('submit',  function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if(height=== ''|| height <0 ||isNaN(height) ){
    result.innerHTML = `Please give valid height ${height}`;
  }else 

  if(weight=== ''|| weight <0 ||isNaN(weight) ){
    result.innerHTML = `Please give valid weight ${weight}`;
  }else{
    const bmi = (weight/ ((height**2)/10000)).toFixed(2)
   //show result 
   // result.innerHTML = `<span>${bmi}</span>`
   if(bmi<18.6 ){
    result.innerHTML =  `<span>Underweight : ${bmi}</span>` ;
  }else 
  if(24.9> bmi>18.6 ){
    result.innerHTML =  `<span>Fit : ${bmi}</span>` ;
  }else{
    result.innerHTML =  `<span>Overweight : ${bmi}</span>` ;
  }
}
})


// add if else condotion to show fit overweigtht , weak 