// Assignment code here


// Grab the generate button from the HTML document
var generateBtn = document.querySelector("#generate");

function writePassword() {

  // Declare character set values
  let upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowChar = "abcdefgijklmnopqrstuvwxyz";
  let numChar = "1234567890";
  let specChar = "~!@#$%^&*(){}|:<>?"
  let charSet = "";

  // Request input values
  let pwLength = prompt("What length of password would you like to generate ?", "Enter a value between 8-128");

  // Check for invalid pwLength input
  if (pwLength < 8 | pwLength > 128) {
    alert("Invalid input. Please try again.");
  } else {

    let upper = prompt("Would you like to include uppercase letters?", "Enter yes or no");
    if (upper.toLowerCase() == "yes") {
      charSet = charSet.concat(upChar);
    }

    let lower = prompt("Would you like to include lower case letters ?", "Enter yes or no");
    if (lower.toLowerCase() == "yes") {
      charSet = charSet.concat(lowChar);
    }

    let num = prompt("Would you like to include numbers ?");
    if (num.toLowerCase() == "yes") {
      charSet = charSet.concat(numChar);
    }

    let spec = prompt("Would you like to include special characters ?");
    if (spec.toLowerCase() == "yes") {
      charSet = charSet.concat(specChar);
    }
  }

  // Check value of charSet & pwLength
  console.log(charSet);
  console.log(pwLength);

  // Check for blank charSet value
  if (charSet === "") {
    alert("You must choose at least one character set to generate a password");
  } else {

    // Generate password based on inputs
    function generatePassword(pwLength) {
      let result = ' ';
      const charsetLength = charSet.length;
      for (let i = 0; i < pwLength; i++) {
        result += charSet.charAt(Math.floor(Math.random() * charsetLength));
      }
      return result;
    }

    // Write generated password
    var password = generatePassword(pwLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// When the generateBtn element is clicked, the function writePassword is executed
generateBtn.addEventListener("click", writePassword);