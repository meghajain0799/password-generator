const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t",
"u","v","w","x","y","z"];

const numbers = ["0","1","2","3","4","5","6","7","8","9"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password1El = document.getElementById("password1");
const password2El = document.getElementById("password2");

//function will generate random passwords by checking user inputs
function getRandomPass(size){
    let password="";
    if(number.checked ==1 && symbol.checked ==1 )
    {
        var length= characters.length + numbers.length + symbols.length;
    for(let i=0; i<size; i++)
    {
       password += characters.concat(numbers,symbols)[Math.floor(Math.random()*length)]
    }
    return password;
}
else if(number.checked == 1){
    var length= characters.length + numbers.length;
    for(let i=0; i<size; i++)
    {
       password += characters.concat(numbers)[Math.floor(Math.random()*length)]
    }
    return password;

} else if(symbol.checked == 1){
    var length= characters.length + symbols.length;
    for(let i=0; i<size; i++)
    {
       password += characters.concat(symbols)[Math.floor(Math.random()*length)]
    }
    return password;
    }
    else{
        var length= characters.length;
        for(let i=0; i<size; i++)
        {
           password += characters[Math.floor(Math.random()*length)]
        }
        return password;
        }
}

// the function will call getRandomPass() to generate two random passwords 
// of size provided by user in prompt
function generatePasswords(){
    let size = prompt("Please enter the length of the password.")
    password1El.textContent = getRandomPass(size);
    password2El.textContent = getRandomPass(size);
    }

//function to copy text/password generated from div element to clipboard
function copyDivToClipboard(passwordId) {
        var range = document.createRange();
        range.selectNode(document.getElementById(`${passwordId}`));
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
        alert("Password copied successfully.");
    }
  