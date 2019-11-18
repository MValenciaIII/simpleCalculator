/*
 If a number is pressed, it will display on the input text box (calculator screen).

*/

//grab the id of everything we need.
var button = document.querySelectorAll('.calculator .num');
var buttonValue = document.querySelectorAll('.calculator .num').value;
var operators = document.querySelectorAll('.calculator .operator');

// button.addEventListener('click', function () {
//     //do stuff
//     if(button) {
//         //grab the value of the button that was clicked.
        
//     }
// })



    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function () {
                //do stuff
                if(button) {
                    //grab the value of the button that was clicked.
                    
                    var addScreen = document.getElementById('screen')
                    addScreen.innerHTML += event.target.getAttribute('value');
                }
                if() { //If screen already has a number add another next to it Until a operator is pressed.
                    
                }
            })
        
    }
    


// button.addEventListener('click', function () {
//     //             //do stuff
//                 if(button) {// add when there is a value add another number.
//                     //grab the value of the button that was clicked.
//                     var addScreen = document.getElementById('screen')
                    
//                 }
//             })
function addition() {
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function () {
            //grab the value from the P tag from above and convert it to a number.
            var num = document.querySelector(' p');
            
            var num1 = new Number(num);
            console.log(num);
        })
   
        
    }
    
}
    
    
