// global variables
const firstInput = document.querySelector('#firstInput');
const secondInput = document.querySelector('#secondInput');
const warning = document.querySelector('#warning')

// to get sepecific value of select tags
const getSelectedValue = () => {
    const selectedValueFirst = document.querySelector('#firstTemps').value;
    const selectedValueSecond = document.querySelector('#secondTemps').value;

    //conditional statement if both value are selected , and condition only works if both are true
    if (selectedValueFirst == 'celsius' && selectedValueSecond == 'fahrenheit') {
        //functions created
        celsiusToFahrenheit();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'celsius' && selectedValueSecond == 'kelvin') {
        //functions created
        celsiusToKelvin();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'kelvin' && selectedValueSecond == 'celsius') {
        //functions created
        kelvinToCelsius();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'kelvin' && selectedValueSecond == 'fahrenheit') {
        //functions created 
        kelvinToFahrenheit();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'fahrenheit' && selectedValueSecond == 'celsius') {
        //functions created
        fahrenheitToCelsius();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'fahrenheit' && selectedValueSecond == 'kelvin') {
        //functions created
        fahrenheitToKelvin();
        hideWarning();
        enabledType();
        changeTemp();
        cursorNotAllowed();
    } else if (selectedValueFirst == 'fahrenheit' && selectedValueSecond == 'fahrenheit') {
        //functions created
        displayWarning();
        disabledType();
    } else if (selectedValueFirst == 'kelvin' && selectedValueSecond == 'kelvin') {
        //functions created
        displayWarning();
        disabledType();
    } else if (selectedValueFirst == 'celsius' && selectedValueSecond == 'celsius') {
        //functions created
        displayWarning();
        disabledType();
    }
}

// to make the cursor not allowed so that user can't type
const cursorNotAllowed = () => {
    secondInput.style.cursor = 'not-allowed'
}

//if both temperatures were chosen
const disabledType = () => {
    firstInput.disabled = true;
    secondInput.disabled = true;
    secondInput.style.cursor = 'not-allowed';
    firstInput.style.cursor = 'not-allowed';
    firstInput.value = '';
    secondInput.value = '';
    firstInput.placeholder = '';
    secondInput.placeholder = '';
}

//to make the input value empty when changing temperatures
const changeTemp = () => {
    firstInput.value = '';
    secondInput.value = '';
}

//so that user can type
const enabledType = () => {
    firstInput.disabled = false;
    secondInput.disabled = false;
    secondInput.style.cursor = 'text';
    firstInput.style.cursor = 'text';
    firstInput.placeholder = 'Oh come on! Type it out';
    secondInput.placeholder = 'Result here!';
}

//display warning if both temperatures are chosen
const displayWarning = () => {
    return warning.style.display = 'block';
}

//hide warning when both temperatures are changed by the user
const hideWarning = () => {
    return warning.style.display = 'none';
}

//convert celsius to fahrenheit
const celsiusToFahrenheit = () => {
    firstInput.addEventListener("input", function () { //add function to first input
        let value = firstInput.value; //assign the inputted value to value
        let cToF; //declare variable
        cToF = (value * 9 / 5) + 32; //reassign variable to the formula
        secondInput.value = `${cToF} °F`; //get the value and attach tempate literals 

        //if first input is empty return empty to second input
        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}


//convert celsius to kelvin
const celsiusToKelvin = () => {
    firstInput.addEventListener("input", function () {
        let value = firstInput.value;
        value = Number(value);
        let cToK;
        cToK = 273.15 + value;
        secondInput.value = `${cToK} K`;

        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}

//convert kelvin to celsius
const kelvinToCelsius = () => {
    firstInput.addEventListener("input", function () {
        let value = firstInput.value;
        let kToC;
        kToC = value - 273.15;
        kToC = kToC.toFixed(2);
        secondInput.value = `${kToC} °C`;

        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}

// convert kelvin to fahrenheit
const kelvinToFahrenheit = () => {
    firstInput.addEventListener("input", function () {
        let value = firstInput.value;
        let kToF;
        kToF = (value - 273.15) * 9 / 5 + 32;
        kToF = kToF.toFixed(2);
        secondInput.value = `${kToF} °F`;

        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}

// convert fahrenheit to celsius
const fahrenheitToCelsius = () => {
    firstInput.addEventListener("input", function () {
        let value = firstInput.value;
        let fToC;
        fToC = (value - 32) * 5 / 9;
        fToC = fToC.toFixed(4);
        secondInput.value = `${fToC} °C`;

        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}

//convert fahrenheit to kelvin
const fahrenheitToKelvin = () => {
    firstInput.addEventListener("input", function () {
        let value = firstInput.value;
        let fToK;
        fToK = (value - 32) * 5 / 9 + 273.15;
        fToK = fToK.toFixed(3);
        secondInput.value = `${fToK} K`;

        if (firstInput.value == "" || firstInput.value == null) {
            secondInput.value = "";
        }
    })
}