// Assignment code here
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";

  const userPasswordLength = prompt("What length password would you like?");

  const passwordLength = parseInt(userPasswordLength, 10);

  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert("wrong length");
    return;
  }
  //
  return "random text";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
