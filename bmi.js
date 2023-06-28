document.getElementById("calculate").addEventListener("click", bmiFunction);

function bmiFunction () {
    var weight = document.getElementById("weightInput").value;
    var height = document.getElementById("heightInput").value;
    var bmi = (weight / (height * height)) * 10000;
    var roundedBMI = bmi.toFixed(1);
    document.getElementById("result").innerHTML = "Your BMI is " + roundedBMI;

    if (weight === "" && height === "") {
        document.getElementById("result").innerHTML = "Please enter weight and height.";
        document.getElementById("recommendation").innerHTML = "";
    } else if (weight === "") {
        document.getElementById("result").innerHTML = "Please enter weight.";
        document.getElementById("recommendation").innerHTML = "";
    } else if (height === "") {
        document.getElementById("result").innerHTML = "Please enter height.";
        document.getElementById("recommendation").innerHTML = "";
    } else if (roundedBMI < 18.5) {
        document.getElementById("recommendation").innerHTML = "Underweight, you are not eating enough.";
    } else if (roundedBMI >= 18.5 && roundedBMI < 24.9) {
        document.getElementById("recommendation").innerHTML = "Normal BMI, continue with your healthy lifestyle.";
    } else if (roundedBMI >= 25 && roundedBMI < 29.9) {
        document.getElementById("recommendation").innerHTML = "Overweight, consider going on a diet and doing exercise.";
    } else if (roundedBMI >= 30) {
        document.getElementById("recommendation").innerHTML = "Obese, at risk of many health conditions.";
    }
}