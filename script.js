// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowCletter = "abcdefghijklmnopqrstuvwxyz"
var upCletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Num = "0123456789"
var symb = "({';[])-*&^%$#@!~`<>,."

function randomLowerCase() {
  console.log(lowCletter[Math.floor(Math.random() * lowCletter.length)]);
}

function randomUpperCase() {
  console.log(upCletter[Math.floor(Math.random() * 26)]);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);