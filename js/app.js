/*
 If a number is pressed, it will display on the input text box (calculator screen).

*/

//grab the id of everything we need.
var button = document.querySelectorAll('.calculator .num');
var buttonValue = document.querySelectorAll('.calculator .num').value;


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
                addScreen.innerText = event.target.getAttribute('value');
            }
            if()
        })
    
}

// button.addEventListener('click', function () {
//     //             //do stuff
//                 if(button) {// add when there is a value add another number.
//                     //grab the value of the button that was clicked.
//                     var addScreen = document.getElementById('screen')
                    
//                 }
//             })