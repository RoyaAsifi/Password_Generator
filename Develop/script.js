// Assignment Code
var generateBtn = document.querySelector("#generate");

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('result');
const lowercaseEl = document.getElementById('result');
const numbersEl = document.getElementById('result');
const symbolsEl = document.getElementById('result');
const generateEl = document.getElementById('result');


const randomFuntions = {
  lower: lowerChars,
  upper: upperChars,
  number: numberChars,
  symbol: specialChars
};


function lowerChars() {
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

function upperChars() {
  return String.fromCharCode (Math.floor(Math.random() *  26) + 65);
}

function numberChars() {
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48)
}

function specialChars() {
  const symbols = '~!#$%&*-+|"';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(lower, upper, number, symbol) {
  var userAlert = window.alert ("Let's generate a password!");
  var userPrompt = window.prompt ("How many characters would you like your password to contain?");
  var userSelect = window.confirm ("Would you like to include lowercase characters?");
  var userSelect = window.confirm ("Would you like to include uppercase characters?");
  var userSelect = window.confirm ("Would you like to include numbers?");
  var userSelect = window.confirm ("Would you like to include special characters?"); 

  let generatedPassword = " ";
  return generatePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


console.log (lowerChars());
console.log (upperChars());
console.log (numberChars());
console.log (specialChars());
console.log(lowerChars, upperChars, numberChars, specialChars);
