function convertTemperature (tempNumb, tempType){
    if (tempType == "Fehrenheit") {
        let total = (tempNumb - 32) * 5/9;
        return Math.floor(total);
    } else if (tempType == "Celcius") {
        total = (tempNumb * 9/5) + 32;
        return Math.floor(total);
    };
};

function convertDistance (distance, measurementType){
    if (measurementType == "Miles") {
        let total = distance * 1.609;
        return Math.floor(total);
    } else if (measurementType == "KM") {
        total = distance/1.609;
        return Math.floor(total);
    };
};

//Example of function usage
alert("In Celcius: 10 \nIn Fehrenheit: " + convertTemperature(10, "Celcius"));
alert("In Fehrenheit: 65 \nIn Celcius: " + convertTemperature(65, "Fehrenheit"));
alert("In kilo meters: 10 \nIn miles: " + convertDistance(10, "Miles"));
alert("In miles: 65 \nIn kilo meters: " + convertDistance(65, "KM"));