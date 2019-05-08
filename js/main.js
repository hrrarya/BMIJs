//bmic is the submit button of this calculator;
const bmic = document.getElementById("bmic");
const reset = document.getElementById("reset");

//Function for Identify BMI
bmi = (weight, height) => weight / height ** 2;

//Function to convert Centimeter to meter
cmToM = height => height / 100;

//BMI logics are here....
bmiLogic = (realBmi, weight, height) => {
  const perfect_weight = 25 * cmToM(height) ** 2;
  let result = "";
  let reduceWeight = 0;
  if (realBmi < 18.5) {
    result = "You are underweight";
    return { result };
  } else if (18.5 < realBmi && realBmi < 24.9) {
    result = "Normal";
    return { result };
  } else if (25 < realBmi && realBmi < 29.9) {
    result = "Your are overweight";
    reduceWeight = (weight - perfect_weight).toFixed(2);
    return { result, reduceWeight };
  } else if (30 < realBmi && realBmi < 34.9) {
    result = "Class (I) obese";
    reduceWeight = (weight - perfect_weight).toFixed(2);
    return { result, reduceWeight };
  } else if (35 < realBmi && realBmi < 39.9) {
    result = "Class (II) obese";
    reduceWeight = (weight - perfect_weight).toFixed(2);
    return { result, reduceWeight };
  } else {
    result = "Class (III) obese";
    reduceWeight = (weight - perfect_weight).toFixed(2);
    return { result, reduceWeight };
  }
};

bmic.addEventListener("click", event => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  event.preventDefault();

  let realBmi = bmi(weight, cmToM(height)).toFixed(2);
  let yourBmi = document.getElementById("yourBmi");
  let yourBmiResult = document.getElementById("bmiCondition");
  let youShouldReduce = document.getElementById("weightCond");
  document.getElementById("bmi-result").style.marginLeft = "0px";
  let bmiResult = bmiLogic(realBmi, weight, height);
  yourBmi.innerText = `Your BMI is ${realBmi}`;
  yourBmiResult.innerText = bmiResult.result;
  if (realBmi < 24.9) youShouldReduce.style.visibility = "hidden";
  else {
    youShouldReduce.style.visibility = "visible";
    youShouldReduce.innerHTML = `You should reduce ${bmiResult.reduceWeight}`;
  }
});

reset.addEventListener("click", event => {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
  document.getElementById("bmi-result").style.marginLeft = "-5000px";
  event.preventDefault();
});
