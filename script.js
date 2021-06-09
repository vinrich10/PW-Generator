// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", ".", "<", ">", "?","~"];
var alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters (between 8-128) would you like your password to contain"));

  // Loop (ask again) if answer is outside the desired length 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 

    // Determine parameters of password 
    var confirmSpecialCharacter = confirm("Click OK(yes) to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK(yes) to confirm if you would like to include numbers");    
    var confirmUpperCase = confirm("Click OK(yes) to confirm if you would like to include uppercase letters");
    var confirmLowerCase = confirm("Click OK(yes) to confirm if you would like to include lowercase letters");
    
      // Loop (ask again) if answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one type of character (special,numeric,uppercase,lowercase");
        var confirmSpecialCharacter = confirm("Click OK(yes) to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK(yes) to confirm if you would like to include numbers");    
        var confirmUpperCase = confirm("Click OK(yes) to confirm if you would like to include uppercase letters");
        var confirmLowerCase = confirm("Click OK(yes) to confirm if you would like to include lowercase letters"); 
    } 

      // Concatcing action to the password parameters 
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphabetUpper)
    }

    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphabetLower)
    }

    else {
      console.log(passwordCharacters)
    }
    
      // loop to select random characters from the array
      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
    }
