// Assignment code here
// arrays for 'password contains' options. this was my first thought:
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\\", "|", ";", ":", ",", "<", ".", ">", "/", "?"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// or should it be like this? looking on forums for people asking about password generators, I saw a lot of this:
var characters = {
lower: "abcdefghijklmnopqrstuvwxyz",
upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
spec: "`~!@#$%^&*()_+-=[]\{}|;':,./<>",
num: "1234567890",
};

// when clicking generate password, bring up a window alert
// ask the user for password length (must be more than 8 and less than 128 characters in length)
function generatePassword() {
  var passLength = prompt("How many characters do you want in your password? (Must be between 8 and 128 characters)");
  var includeLower = confirm("Would you like to include lowercase letters? (OK for Yes and Cancel for No)");
  var includeUpper = confirm("Would you like to include uppercase letters? (OK for Yes and Cancel for No)");
  var includeSpec = confirm("Would you like to include special characters? (OK for Yes and Cancel for No)")
  var includeNumbers = confirm("Would you like to include numbers? (OK for Yes and Cancel for No)")
}

// can't get this to work right now
// // alert if password is too short 
// if (passLength > 8) {
//   window.alert("Password must be at least 8 characters")
//   return generatePassword;
// }
// // alert if password is too long 
// if (passLength < 128) {
//   window.alert("Password cannot be more than 128 characters")
//   return generatePassword;
// }



// randomly generate password based on user conditions (multistep) 




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
