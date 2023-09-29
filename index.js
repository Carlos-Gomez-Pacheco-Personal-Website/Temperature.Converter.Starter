// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  const celc = (fahren - 32) * (5 / 9);
  return celc.toFixed(2);
}
/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  let show = "";
  if (fahren < 32) {
    show = "very cold";
  } else if (fahren < 64) {
    show = "cold";
  } else if (fahren < 86) {
    show = "warm";
  } else if (fahren <= 100) {
    show = "hot";
  }
  return `${fahren}° F (equal to ${celc}° C) is ${show}`;
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  const randFloat = Math.random() * 100;
  const randInt = Math.round(randFloat);
  return randInt;
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output1 = createMessage(fahren, celc);
console.log(output1);
alert(output1);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output2 = createMessage(fahren, celc);
console.log(output2);
alert(output2);

fahren = rand(110);
celc = convertToCelsius(fahren);
output3 = createMessage(fahren, celc);
console.log(output3);
alert("Generating a first random degree: " + [output3]);

fahren = rand(110);
celc = convertToCelsius(fahren);
output4 = createMessage(fahren, celc);
console.log(output4);
alert("Generating a second random degree: " + [output4]);

function onresult(output) {
  if (output == 1) return (document.getElementById("out1").innerHTML = output1);
  if (output == 2) return (document.getElementById("out2").innerHTML = output2);
  if (output == 3) return (document.getElementById("out3").innerHTML = output3);
  if (output == 4) return (document.getElementById("out4").innerHTML = output4);
}
