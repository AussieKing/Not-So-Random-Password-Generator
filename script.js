// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = parseInt(prompt("How long do you want your password to be? (Between 8 and 128 characters)")); 
  
    // Checking that the the password length is 8 - 128 characters
    while (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt("Please enter a password length between 8 and 128 characters."));
    }
   // here we ask the user to select which types of characters to use (lowercase, uppercase, numbers, or special char)
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // here we are defining the arrays of characters to use for each type of character
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

  // let's combine the selected characters into a single string
  let charsToUse = "";
  if (includeLowercase) charsToUse += lowercaseChars;
  if (includeUppercase) charsToUse += uppercaseChars;
  if (includeNumeric) charsToUse += numericChars;
  if (includeSpecial) charsToUse += specialChars;

  // Generates the password and uses a (for)loop to select a random character from the combined string
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    // Select a random character (using Math.random) from the combined string
    let randomIndex = Math.floor(Math.random() * charsToUse.length);
    let randomChar = charsToUse.charAt(randomIndex);

    // Append the selected character to the password
    password += randomChar;
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);