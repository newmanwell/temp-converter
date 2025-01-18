// Create const that prompts to get fahrenheit temp from the user and convert it from string to number
const getFahrenheitTemp = Number(prompt(`Enter a number in Fahrenheit`));

// Create a function convertToCelsius
const convertToCelsius = () => {
  // Convert to celcius using equation provided
  const celsiusTemp = (getFahrenheitTemp - 32) * (5/9);
  // Return temp in celcius
  return celsiusTemp;
}

// Invoke function with a varible so it can be used in the alert
const conversionTemp = convertToCelsius();

// Create a function to describe the temps 
const describeTemperature = () => {
  // Write an conditional in the function block that returns a string based on the Fahrenheit temps
  if (getFahrenheitTemp < 32) {
    return `very cold`;
  } else if (getFahrenheitTemp < 64) {
    return `cold`;
  } else if (getFahrenheitTemp < 86) {
    return `warm`;
  } else if (getFahrenheitTemp < 100) {
    return `hot`;
  } else {
    return `very hot`;
  }
}

// Invoke function with a varible so it can be used in the alert
const howItFeels = describeTemperature();

// Send alert to user 
alert(`${getFahrenheitTemp} converts to ${conversionTemp} celcius and that feels ${howItFeels}.`);