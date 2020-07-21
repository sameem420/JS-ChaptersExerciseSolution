// 1st Task
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName);


// 2nd Task
var favPhone = prompt("What is your favorite Mobile Phone?");
document.write("<h3>My favorite Phone is : " + favPhone + "</h3><br>");
document.write("<h3>Length of the String : " + favPhone.length + "</h3>");


// 3rd Task
var myCountry = "Pakistan";
document.write("<h3>String : " + myCountry + "</h3><br>");
document.write("<h3>Index of 'n' : " + myCountry.indexOf('n') + "</h3><br>");


// 4th Task
var greetings = "Hello World";
document.write("<h3>String : " + greetings + "</h3><br>");
document.write("<h3>Last Index of 'l' : " + greetings.lastIndexOf('l') + "</h3><br>"); 


// 5th Task
var myNationality = "Pakistani";
document.write("<h3>String : " + myNationality + "</h3><br>");
document.write("<h3>Character at Index 3 : " + myNationality.charAt(3) + "</h3><br>");


// 6th Task
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");

var fullName =  firstName.concat(" ", lastName);

alert("Welcome " + fullName);


// 7th Task
var city = "Hyderabad";
document.write("<h3>City : " + city + "</h3><br>");
document.write("<h3>After Replcement : " + city.replace("Hyder","Islam") + "</h3><br>");


// 8th Task
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h3>After Replcement : " + message.replace(/and/g, "&") + "</h3><br>");


// 9th Task
var num = "472";
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");
num = Number(num);
document.write("<h3>Value : " + num + "</h3><br>");
document.write("<h3>Type : " + typeof(num) + "</h3><br>");


// 10th Task
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Upper Case : " + str.toUpperCase() + "</h3><br>");


// 11th Task
var str = prompt("Enter something : ");
document.write("<h3>User Input : " + str + "</h3><br>");
document.write("<h3>Title Case : " + str[0].toUpperCase() + str.substring(1) + "</h3><br>");


// 12th Task
var num = 35.36 ;
document.write("<h3>Number : " + num + "</h3><br>");
num = num.toString();
document.write("<h3>Result : " + num.replace('.',"") + "</h3><br>");


// 13th Task
var userName=prompt("Enter your Username : ");
var message;
var split=[];
var arr=[];
for(var i = 0;i < userName.length; i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
    {
            message="Username is correct!";
    }
    while(arr[i]==33 || arr[i]==44 || arr[i]==46 || arr[i]==64)
    {
        alert("please enter a valid userName");                                                                                                                   
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33 || arr[i]!=44 || arr[i]!=46 || arr[i]!=64)
            {
                break;
            }
        }
    }
}
alert(message);


// 14th Task
var dishes = ["cake", "apple pie", "cookie", "chips", "patties"]; 
var searchDish = prompt("Welcome to ABC Bakery, what do you want to order sir/mam? ");
var found = dishes.includes(searchDish);
if(found)
{
    document.write(searchDish + " is available at index " + dishes.indexOf(searchDish) + " in our bakery");
}
else
{
    document.write("We are sorry. " + searchDish + " is not available in our bakery");
}


// 15th Task
var password = prompt("Please enter your password : ");
if (isNaN(parseInt(password[0])))
{
    if (password.length < 6) {
        alert("Your password must be at least 6 characters"); 
    }
    if (password.search(/[a-z]/i) < 0) {
        alert("Your password must contain at least one letter.");
    }
    if (password.search(/[0-9]/) < 0) {
        alert("Your password must contain at least one digit."); 
    }
}
else  {
    alert("Password cannot begin with a number."); 
}


// 16th Task
var university = "University of Karachi";
university = university.replace(/\s/g, "");
university = university.split('');
for (var i = 0; i < university.length; i++)
{
    document.write(university[i] + "<br>");
}


// 17th Task
var userInput = prompt("Please enter something : ");
document.write("User Input : " + userInput + "<br>");
document.write("Last character of input : " + userInput.charAt(userInput.length-1));


// 18th Task
var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
//var count = (str.match(/the/g) || []).length;
var count = str.split("the").length - 1;
document.write("Text : " + str + "<br>");
document.write("There are " + parseInt(count) + " occurrence(s) of the word " + "'the'" + "<br>");