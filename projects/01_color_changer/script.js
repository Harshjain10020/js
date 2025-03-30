const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const reset = document.querySelector('#reset')

reset.addEventListener('click', function(e){
    body.style.backgroundColor = 'white';
});

buttons.forEach(function(button){
   // console.log(button)
    button.addEventListener('click', function(e){
        // if(e.target.id == 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == 'red'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        // if(e.target.id == 'blue'){
        //     body.style.backgroundColor = e.target.id;
        // }
        switch (e.target.id) {
            case 'grey':
                body.style.backgroundColor = e.target.id;
                break;
            case 'red':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'green':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = 'white';
                break;
        }
    });
});