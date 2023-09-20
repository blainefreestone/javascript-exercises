function convertToCelsius(tempFahr)
{
  let tempCelsius = (tempFahr - 32) * (5/9);
  let rounded = Math.round(tempCelsius * 10) / 10;
  return rounded;
}

function convertToFahrenheit(tempCelsius)
{
  let tempFahr = ((tempCelsius * (9/5) + 32));
  let rounded = Math.round(tempFahr * 10) / 10;
  return rounded
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
