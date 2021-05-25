function temperatureConverter1(valnum1) {
    valnum1 = parseFloat(valnum1);
    document.getElementById("outputFahrenheit").innerHTML = (valnum1 * 1.8) + 32;

}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML = Math.round(valNum - 32) / 1.8;
}