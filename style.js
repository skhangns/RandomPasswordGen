var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar = "ABCDEFFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()_+?<>:{}[]"
var numberChar = "0123456789"

function getPassword(){
    var passwordChars = "";
    do{
        var passwordLength = prompt("Choose the length of your password(btw 8-128 char",);
       if(passwordLength<8 || passwordLength>128)
        {alert("Password Length must between 8-128 characters")}
    } while(passwordLength<8 || passwordLength>128)
    if(passwordLength<8 || passwordLength>128){
        alert("Password Length must between 8-128 characters")
    }
    var containsLowerCase = confirm("Would you like to include lowercase letters?");
    if(containsLowerCase == true){
        passwordChars += lowerCaseChar;
       

    }
    var containsUpperCase = confirm("Would you like to include uppercase letters?");
    if(containsUpperCase == true){
       passwordChars += upperCaseChar;
     
    }
    var containsSpecialChars = confirm("Would you like to include special letters?");
    if(containsSpecialChars == true){
       passwordChars += specialChar;
       
    }
    var containsNumbers = confirm("Would you like to include numbers?");
    if(containsNumbers == true || (containsLowerCase == false && containsSpecialChars == false && containsUpperCase == false)){
       passwordChars += numberChar;
       console.log(passwordChars);
    }

    console.log(passwordLength);
   
    var password = "";

    for (var i=0; i<passwordLength; i++){
        var randomNumber = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.substring(randomNumber,randomNumber+1);
        }
        document.getElementById("password").value = password
    }

   