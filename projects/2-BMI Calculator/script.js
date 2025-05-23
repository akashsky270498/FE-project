const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  console.log(height, weight);
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid ${height}`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is <span>${bmi}</span>. You are Under weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is <span>${bmi}</span>. You are Normal weight`;
    } else {
      results.innerHTML = `Your BMI is <span>${bmi}</span>. You are Over weight`;
    }
  }
});
