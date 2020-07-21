var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("<h3>Sum of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 23;
var num2 = 15;
var sum = num1 - num2;
document.write("<h3>Subtraction of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 33;
var num2 = 5;
var sum = num1 / num2;
document.write("<h3>Division of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 3;
var num2 = 5;
var sum = num1 * num2;
document.write("<h3>Multiplication of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num1 = 13;
var num2 = 5;
var sum = num1 % num2;
document.write("<h3>Modulus of " +num1+ " and " +num2+" is "+ sum +"</h3><br>");

var num;
document.write("Value after variable declaration is: "+ num +"<br>");
num = 12;
document.write("Initial value: " + num + "<br>");
num +=1;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after Addition is: " + num + "<br>");
num -=1;
document.write("Value after decrement is: " + num + "<br>");
num /=3;
document.write("The remainder is: " + num + "<br>");

var costOfMovieTicket = 600;
var costOfFiveTickets = 5* costOfMovieTicket;
document.write("Total cost to buy 5 tickets to a movie is: " + costOfFiveTickets + "PKR<br><br>");


var number = prompt("Enter the number :");
var range = prompt("Enter the range :");

document.write("Table of " + number  + "<br>");
for (i = 1; i<= range; i++)
{
    document.write("<b>" + number + " x " + i + " = " + number*i + "</b><br>");
}

