// -----------------------------------------------------------------------------------------
//grab the id of everything we need.
// var button = document.querySelectorAll('.calculator .num');
// var buttonValue = document.querySelectorAll('.calculator .num').value;
// var operators = document.querySelectorAll('.calculator .operator');

// button.addEventListener('click', function () {
//     //do stuff
//     if(button) {
//         //grab the value of the button that was clicked.
        
//     }
// })

// method is a function inside a class
//Classes are like other classes in other languages that surround everything\
//inside your class you must have a constructor. Constructors can consist of anything, variables, objects, etc. to help your code.
//When invoking a class it will invoke every function or "method" that is invoked inside the class
//


    // for (let i = 0; i < button.length; i++) {
    //     button[i].addEventListener('click', function () {
    //             //do stuff
    //             if(button) {
    //                 //grab the value of the button that was clicked.                
    //                 var addScreen = document.getElementById('screen')
    //                 addScreen.innerHTML += event.target.getAttribute('value');
    //             }
    //             if(operators) { //If screen already has a number add another next to it Until a operator is pressed then number will disappear.

    //             }
    //         })
    // }
    


// button.addEventListener('click', function () {
//     //             //do stuff
//                 if(button) {// add when there is a value add another number.
//                     //grab the value of the button that was clicked.
//                     var addScreen = document.getElementById('screen')
                    
//                 }
//             })
// function addition() {
//     for (let i = 0; i < operators.length; i++) {
//         operators[i].addEventListener('click', function () {
//             //grab the value from the P tag from above and convert it to a number.
//             var num = document.querySelector(' p');   
//             var num1 = new Number(num);
//             console.log(num);
//         })      
//     }
// }
    
    
// -----------------------------------------------------------------------------------------

/*
 If a number is pressed, it will display on the calculator screen.
 after click an operator the first number value will be stored in some way
 and the calculator will take a second number to complete the operation

Create different functions to deal with different operations.

*/
(function () {
    var firstNumber = '';
    var secondNumber = '';
    var operator = '';
    var screen = document.getElementById('screen');
    var numbers = document.querySelectorAll('.num');
    var operators = document.querySelectorAll('.operator');
    
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        element.addEventListener('click', function (event) {
            // if (element.length > 5) {
            //     element.value = element.value.subscript(0,5);
            // }
            screen.innerText += element.getAttribute('data-value');
           
            
        });
    }
    
    for (let i = 0; i < operators.length; i++) {
        const element = operators[i];
        element.addEventListener('click', function (event) {
            if (element.getAttribute('data-value') == '=') {
                secondNumber = screen.innerText;
                solve();
            } else {
                firstNumber = screen.innerText;
                operator = element.getAttribute('data-value');
                screen.innerText = '';
            }
        });
    }
    
    function solve() {
        let left = Number(firstNumber);
        let right = Number(secondNumber);
        switch (operator) {
            case '+':
                screen.innerText = left + right;
                firstNumber = left + right;
                break;
            case '-':
                screen.innerText = left - right;
                    firstNumber = left - right;
                    break;
            case '*':
                screen.innerText = left * right;
                firstNumber = left * right;
                break;
            case '/':
                screen.innerText = left / right;
                firstNumber = left / right;
                break;      
        }
    }
    
})();
