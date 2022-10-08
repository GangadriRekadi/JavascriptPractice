const numbers = document.querySelectorAll('.number');
const signs = document.querySelectorAll('.sign');

const result = document.querySelector('span');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent')
const equals = document.querySelector('.equals')
const operation = document.querySelector("#sign1")

var firstValue = "";
var isFirstValue = false;

var secondValue = "";

var sign = "";
var resultValue = 0;
var decimalCount = 0;
var dispay = ""

var sign1 = "No Operation occuring"


operation.innerHTML = sign1;


// function eventHandler(e){

//     let value = e.target.getAttribute('value')
//     if(isFirstValue === false){

//         getFirstValue(value);

//     }

//     else{
//         getSecondValue(value);
//     }

// }

numberEventListenersCreation();

signEventListenersCreation();




clear.addEventListener("click", () => {

    result.innerHTML = 0;
    firstValue = '';
    secondValue = '';
    sign = "";
    decimalCount = 0;
    isFirstValue = false;
    operation.innerHTML = ` memory cleared`
})

negative.addEventListener("click", () => {

    if (firstValue && (!sign)) {

        firstValue *= -1;
        result.innerHTML = firstValue;
        operation.innerHTML = `  sign Changed`
    }
    else if (secondValue && sign) {

        let len = secondValue.length;
        secondValue *= -1;
        dispay = dispay.substring(0,dispay.length-len);
        console.log(dispay,secondValue)
        dispay += secondValue
        result.innerHTML = dispay;
        operation.innerHTML = `  sign Changed`
    }
    else if (!firstValue)
        result.innerHTML = 0
    else
        operation.innerHTML = ` ${sign} operation is in middle. Second value should be enter! `;

})

function signEventListenersCreation() {

    // Creating sign event Listeners:

    for (let i = 0; i < signs.length; i++) {

        signs[i].addEventListener('click',

            (e) => {

                calculation();

                sign = e.target.getAttribute('value');
                if (!firstValue) {
                    result.innerHTML = 0;
                    isFirstValue = false;
                }
                else {
                    operation.innerHTML = `  ${sign} operation occuring`;
                    dispay = firstValue + sign;
                    result.innerHTML = dispay
                    isFirstValue = true; 
                    decimalCount = 0
                };

            }
        )
    }
}




function numberEventListenersCreation() {

    // creating event listeners for all number buttons using for loop

    for (let i = 0; i < numbers.length; i++) {

        numbers[i].addEventListener('click',
            (eS) => {

                let value = eS.target.getAttribute('value');


                if (!isFirstValue) {
                    getFirstValue(value);
                }

                else {
                    getSecondValue(value);
                }
            })

    }

}

function getFirstValue(value) {

    if (value === '.' && (!sign)) {

        ++decimalCount;

        if (decimalCount > 1) {

            return;
        }
    }

    firstValue += value;
    result.innerHTML = firstValue


}

function getSecondValue(value) {



    if (sign && firstValue) {

        if (value === '.') {
            ++decimalCount;
            if (decimalCount > 1) {
                return;
            }
        }
        secondValue += value;
        dispay += value

        result.innerHTML = dispay;

    }
}


equals.addEventListener('click', calculation);

percent.addEventListener("click",
    () => {
        
        if (firstValue && (!sign)) {
           
            firstValue = firstValue / 100;
            firstValue = firstValue.toFixed(2);
            result.innerHTML = firstValue;
            operation.innerHTML = "    % Operation Occured";
        }
        else if (secondValue && sign) {

            
                secondValue = Number(secondValue);
                secondValue = secondValue.toString();
           

            let len = secondValue.length;

            secondValue = secondValue / 100;
            secondValue = secondValue.toFixed(2);

            dispay = dispay.substring(0,dispay.length-len);
            dispay += secondValue;
            result.innerHTML = dispay;
            operation.innerHTML = "    % Operation Occured";
        }
        else if (!firstValue)
            result.innerHTML = 0;
        else
            operation.innerHTML = ` ${sign} operation is in middle. Second value should be enter! `;
    }

);



function calculation() {


    if (firstValue && secondValue && sign) {

        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);

        if (sign === "+")
            resultValue = firstValue + secondValue;
        else if (sign === "-")
            resultValue = firstValue - secondValue;
        else if (sign === "x")
            resultValue = firstValue * secondValue;
        else if (sign === "/")
            resultValue = firstValue / secondValue;

        firstValue = resultValue.toFixed(2);
        dispay = firstValue;
        result.innerHTML = firstValue;
    }

    else if (!firstValue)
        result.innerHTML = 0;

    else {
        firstValue = parseFloat(firstValue);
        result.innerHTML = firstValue.toFixed(2); 
    }

    operation.innerHTML = "    Final answer is..... "

    secondValue = "";
    decimalCount = 0;
    sign = ""
    if (firstValue)
        isFirstValue = true;
}
