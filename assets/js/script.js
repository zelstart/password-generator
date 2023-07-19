// Assignment code here

// an object containing all potential characters, grouped by type
var characters = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  specialChar: "`~!@#$%^&*()_+-=[]\{}|;':,./<> ?",
  numbers: "1234567890",
};


// when clicking generate password, bring up a window alert
// ask the user for password length (must be more than 8 and less than 128 characters in length)
function generatePassword() {
  var passLength = prompt("How many characters do you want in your password? (Must be between 8 and 128 characters)");
  // alert if password is too short 
  if (passLength < 8) {
    window.alert("Password must be at least 8 characters!");
    return;
  } else {

    // alert if password is too long 
    if (passLength > 128) {
      window.alert("Password cannot be more than 128 characters!");
      return;
    }

    // alert if user enters an invalid character (i.e a letter or symbol instead of a number)
  }
  if (isNaN(passLength)) {
    window.alert("Please enter a valid number!");
    return;
  }

  // ask user to choose which characters to include
  var includeLower = confirm("Would you like to include lowercase letters? (OK for Yes and Cancel for No)");
  var includeUpper = confirm("Would you like to include uppercase letters? (OK for Yes and Cancel for No)");
  var includeSpecial = confirm("Would you like to include special characters? (OK for Yes and Cancel for No)");
  var includeNumbers = confirm("Would you like to include numbers? (OK for Yes and Cancel for No)");

  // alert if user chooses "no" for all four types of characters 
  if (includeLower === false && includeUpper === false && includeSpecial === false && includeNumbers === false) {
    window.alert("Please choose at least one character type.");
  }

  // empty container to store user's choices
  var userChoices = "";

  // if statements to determine which types of characters will be used
  if (includeLower === true) {
    userChoices += characters.lowerCase
  }

  if (includeUpper === true) {
    userChoices += characters.upperCase
  }

  if (includeSpecial === true) {
    userChoices += characters.specialChar
  }

  if (includeNumbers === true) {
    userChoices += characters.numbers
  }

  // an empty container for the completed password
  var password = "";

  // generate a password that contains the number of characters defined by passLength
  for (var i = 0; i < passLength; i++) {
    // choose random items from the characters the user selected.
    password += userChoices.charAt(Math.floor(Math.random() * userChoices.length));
  }
  console.log(password)
  return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // if a password cannot be generated due to invalid user responses, this will keep the text field blank.
  if (password == null | password === undefined) {
    passwordText.value = ""
  } else {
  passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
