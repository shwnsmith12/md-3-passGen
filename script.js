/* Assignment Code
Created the variables I would need for determining criteria
like lower & uppercase, numbers, and special characters
as well as variables to call back the checks created in the
js code below
*/
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcedefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spec = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passLength;
var ucCheck;
var numCheck;
var specCheck;

// Write password to the #password input
/*
The code below here is to prompt the user to pick the
generated password's length between 8 and 128 characters.
Should the user choose a number that is below 8 or above 128 the
user will be prompted to stay choose a number within
the defined criteria.
Following that a prompt should show to have them answer the
following yes/no criteria
*/
function determineLength(){
  passLength = prompt("How long would you like your generated password to be? Please choose between 8 and 128 characters: ")
    
    if (passLength<8){
      alert("Password length must be at least 8 characters long");
      determineLength();
    } else if (passLength>128){
      alert("Password length must not exceed 128 characters long");
      determineLength();
    } else  if (isNaN(passLength)){
      alert("Password length must be a number between 8 and 128 characters");
      determineLength();
    } else {
      alert("Please answer the following prompts to generate a secure password")
    }
}

/*
The function below 3 functions are used to determine whether
the password generated for the user should include upper case,
numbers, and/or special characters in that respective order.

If the user does not select anything they will be prompted again
to select yes or no. Depending on answer the generated password
will either contain those specified criteria.
*/

function determineUppercase() {
  ucCheck = prompt("Should your generated password include upper case letters? \n(Yes or No)");
  ucCheck = ucCheck.toLowerCase();

  if (ucCheck === null || ucCheck === "") {
    alert("Please select Yes or No");
    determineUppercase();
  } else if (ucCheck === "yes" || ucCheck ==="y") {
    ucCheck = true;
    return ucCheck;
  } else if (ucCheck === "no" || ucCheck ==="n") {
    ucCheck = false;
    return ucCheck;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return ucCheck;
}

  function determineNumbers() {
  numCheck = prompt("Should your generated password include numbers? \n(Yes or No)");
  numCheck = numCheck.toLowerCase();

  if (numCheck === null || numCheck === "") {
    alert("Please select Yes or No");
    determineNumbers();
  } else if (numCheck === "yes" || numCheck ==="y") {
    numCheck = true;
    return numCheck;
  } else if (numCheck === "no" || numCheck ==="n") {
    numCheck = false;
    return numCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numCheck;
}

  function determineSpecial() {
  specCheck = prompt("Should your generated password include special characters? \n(Yes or No)");
  specCheck = specCheck.toLowerCase();

  if (specCheck === null || specCheck === "") {
    alert("Please select Yes or No");
    determineSpec();
  } else if (specCheck === "yes" || specCheck ==="y") {
    specCheck = true;
    return specCheck;
  } else if (specCheck === "no" || specCheck ==="n") {
    specCheck = false;
    return specCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpec();
  }

  return specCheck;
}

/*
The function below brings everything that was chosen by the user
above and 'generates' the password itself.
*/

function generatePassword(){
  determineLength();
  console.log(passLength);
  determineUppercase();
  console.log(ucCheck);
  determineNumbers();
  console.log(numCheck);
  determineSpecial();
  console.log(specCheck);

/*
The below set determines that we default to using solely
lower case letters for the password if all the criteria are
returned with a 'no'/'false' selection.

It then goes done the path of which criteria should be selected
as prompted, starting by having a 'true' input for all 3
prompts then paring down depending on whether any 'false' inputs
are selected all the way back down to 'default is all lowercase'
*/
  var characters = lowerCase;
  var password = "";
  if (ucCheck && numCheck && specCheck){
    characters += upperCase + num + spec;
  
  }else if (ucCheck && numCheck){
    characters += upperCase + num;
  
  }else if (numCheck && specCheck){
    characters += num + spec;
  
  }else if (ucCheck && specCheck){
    characters += upperCase + spec;
  
  }else if (ucCheck){
    characters += upperCase;
  
  }else if(numCheck){
    characters += num;
  
  }else if (specCheck){
    characters += spec;
  
  }else{
    characters === lowerCase;
  }
  
    for(var i = 0; i < passLength; i++){
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
  }

/*
The function below tells the text value of the generated password to
be printed to the document so that the user can obtain the
password that was generated for them using all the functions
we created above
*/

function printPass() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// This function was already there for us, and it works perfectly :)
// Add event listener to generate button
generateBtn.addEventListener("click", printPass);
