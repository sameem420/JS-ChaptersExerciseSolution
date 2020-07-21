Chapter 9-11              USER INPUT & CONDITIONAL STATEMENT

question1
1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights”
var city=prompt("Enter your city name?");
var xcity=city.toLocaleLowerCase();
if(xcity=="karachi")
{
    alert("Welcome to city of lights");
}
else{
    alert("We are not ordered to welcome you");
}
question1

question2
2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.
var gender=prompt("Enter your gender");
gender=gender.toLowerCase();
if(gender=="male")
{
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'm");
}
question2

question3
3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now
var color=prompt("Input color of road traffic signal");
color=color.toLowerCase();
if(color==="red")
{
    alert("Must stop");
}
else if(color==="yellow")
{
    alert("ready to move");
}
else if(color==="green")
{
    alert("move now");
}
else
{
    alert("Enter right value");
}
question3

question4
4.Write a program to take input remaining fuel in car 
(in litres) from user. If the current fuel is less than 
0.25litres,show the message “Please refill the fuel in 
your car”
var fuel=prompt("Input remaining fuel in your car(in litres)");
fuelNum=parseFloat(fuel);
if(fuelNum<0.25)
{
    alert("Please refill the fuel in your car");
}
else if(fuelNum>=0.25)
{
    alert("Your fuel is ok now");
}
question4

question5
5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
yes its ok alert is running
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
No its Not true it must be ++b to run.alert is not running 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
only condition 2 and 4 is true
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
Yes the cost equals
e. if (true){
alert("True");
}
if (false){
alert("False");
}
Yes true
f. if("car" < "cat"){
    alert("car is smaller than cat");
}
Yes alert is running because r comes first than t
try it to clear the concept
if("caq" < "car"){
    alert("caq is smaller than car");
}
question5

question6
6. Write a program to take input the marks obtained in 
three subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute grade 
as per following table:
var sub = prompt("Enter the marks for sub1");
var sub1=parseFloat(sub);
sub = prompt("Enter the marks for sub2");
var sub2=parseFloat(sub);
sub = prompt("Enter the marks for sub3");
var sub3=parseFloat(sub);
var obt=sub1+sub2+sub3;
var total=prompt("Enter the total marks");
total=parseFloat(total);
var percentage=(obt/total)*100;
var grade;
var remarks;
if(percentage>=80)
{  
    grade="A-one";
    remarks="excellent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B"
    remarks="You need to improve";
}
else if(percentage<60)
{
    grade="fail";
    remarks="Sorry";
}
var marksheet="MarksSheet";
var tm="Total Marks";
var mo="Marks Obtained";
var perc = "Percentage";
var gra="Grade";
var rema ="Remarks";
document.write(marksheet.bold()+"<br>"+tm.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+total
+"<br>"+mo.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+obt+"<br>"+perc.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+
percentage+"%"+"<br>"+gra.bold()+"&nbsp;&nbsp;:"+grade+"<br>"+rema.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"
+remarks);
question6

question7
7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.

var sec=Math.floor(Math.random()*10);
var guess=prompt("Guess the secret number");
guess=parseInt(guess);
if(guess===sec)
{
    alert("Bingo!Correct Answer aa");
}
else if((guess-1)===sec)
{
    alert("Close enough to the correct answer");
}

question7


question8
8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3
var che=prompt("Enter the number to check if its divisible by 3");
check=parseInt(che);
if(check%3===0)
{
    alert("Yes it is divisible by 3");
}
else 
{
    alert("No its not divisible by 3");
}

question8

question9
9. Write a program that checks whether the given input is an
even number or an odd number
var eve=prompt("Enter the number to check for even or odd");
eve=parseInt(eve);
if(eve%2===0)
{
    alert("Even Number it is");
}
else
{
    alert("Its an Odd number");
}
question9


question10
10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
var T=prompt("Enter the temperature");
var temp=parseInt(T);
if(temp>40)
{
    alert("It is too hot outside");
}
else if(temp>30)
{
    alert("The Weather today is normal");
}
else if(temp>20)
{
    alert("Today's weather is Normal");
}
else if(temp>10)
{
    alert("OMF! Today’s weather is so Cool.");
}
question10


question11
11. Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user
var num1=prompt("Enter first number");
num1=parseFloat(num1);
var num2=prompt("Enter second number");
num2=parseFloat(num2);
var result;
var sym=prompt("Enter the operation to perform (+, -, *, /, %)");
if(sym==="+")
{
    result=num1+num2;
    alert("The sum of two numbers is equal to:    " + result);
}
else if(sym==="-")
{
    result=num1-num2;
    alert("The difference of two numbers is equal to:   "+result);
}
else if(sym==="*")
{
    result=num1*num2;
    alert("The multiplication of two numbers is equal to:    "+result);
}
else if(sym==="/")
{
    result=num1/num2;
    alert("The division of two numbers is equal to:     "+result);
}
else if(sym==="%")
{
    result=num1%num2;
    alert("The remainder of two numbers is equal to:    "+result);
}
else
{
    alert("Enter right symbol please");
}
question11
