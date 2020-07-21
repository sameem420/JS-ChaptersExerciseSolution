// 1st Task
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number > 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number should be non-negative.");
}


// 2nd Task
var number = prompt("Enter a Number (floating point) : ");
number = Number(number);
if(number <= 0)
{
    document.write("Number : " + number + "<br>");
    document.write("Round off value : " + Math.round(number) + "<br>");
    document.write("Floor value : " + Math.floor(number) + "<br>");
    document.write("Ceil value : " + Math.ceil(number) + "<br>");
}
else {
    alert("Number is non-negative.");
}


// 3rd Task
var number = prompt("Enter a Number (positive or negative) : ");

document.write("The absolute value of : " + Math.abs(number) + "<br>");


// 4th Task
document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");

document.write("random dice value : " + Math.floor(Math.random() * 11) + "<br>");


// 5th Task
var coin = Math.floor(Math.random() * 2) + 1;
if(coin == 2)
{
    document.write(coin + "<br>");
    document.write("random coin value : Heads" + "<br>");
}
else if(coin == 1)
{
    document.write(coin + "<br>");
    document.write("random coin value : Tails" + "<br>");
}


// 6th Task
document.write("random number between 1 and 100 is : " + Math.floor(Math.random() * 101) + "<br>");


// 7th Task
var weight = prompt("Enter your weight in kilograms : ");
weight = weight.split("kgs" || "kilograms");
weight = parseInt(weight);
document.write("The weight of user is : " + weight + " kilograms <br>");


// 8th Task
var secretNumber = Math.floor(Math.random() * 11) + 1;

while(userChoice != secretNumber)
var userChoice = prompt("Enter a number between 1 and 10 : ");
{
    if(parseInt(userChoice) == parseInt(secretNumber))
    {
        alert("Congrats! You guessed it right.");
    }
    else{
        alert("Sorry! Try again.");
    }
}