// Chapter 6-9   MATH EXPRESSIONS

// question1
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a=10;
document.write("<br><br>The value of a is: "+a)
++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a+"<br><br>");

// question2
// 2. What will be the output in variables a, b & result after
// execution of the following script:

var a = 2, b = 1;
var result = --a - --b + ++b + b--;

// Explain the output at each stage:

--a;

// At --a it is 1 because the value is 1

--a - --b;

// At this stage b is 0 so --a - --b=1;
// --a - --b + ++b = 1 - 0 + 0=2;
// --a - --b + ++b + b--=;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("result is "+result+"<br>");

// question3
// 3. Write a program that takes input a name from user &
// greet the user.

var name=prompt("Whats your name?");
alert("Your name is " + name);


// question4
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var num=prompt("Enter a number: ");
var num1=5;
var mul;
if(!num)
{
    for(var i=1;i<=10;i++)
    {
        mul=num1*i;
        document.write(num1+" x "+i+" = "+mul+"<br>");
    }
}
else
{
    for(var i=1;i<=10;i++)
    {
        mul=num*i;
        document.write(num+" x "+i+" = "+mul+"<br>");
    }
}


// question5
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.

var sub1,sub2,sub3;
sub1=prompt("Enter first subject name");
sub2=prompt("Enter second subject name");
sub3=prompt("Enter third subject name");

// b) Total marks for each subject is 100, store it in another
// variable.

var total_marks = 100;

// c) Take obtained marks for first subject from user and
// stored it in different variable.

var x=prompt("Enter obtained marks for subject one ");
var obtained_marks1 = parseInt(x);

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.

var y=prompt("Enter obtained marks for subject two ");
var obtained_marks2 = parseInt(y);
var z=prompt("Enter obtained marks for subject three ");
var obtained_marks3 = parseInt(z);
var percent1=(obtained_marks1/total_marks)*100;
var percent2=(obtained_marks2/total_marks)*100;
var percent3=(obtained_marks3/total_marks)*100;

// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var Total=total_marks*3;
var TotalPercentage;
var obtained=obtained_marks1+obtained_marks2+obtained_marks3;
TotalPercentage=(obtained/Total)*100;
var head1 = "Subject";
var head2 = "Total Marks";
var head3 = "Obtained Marks";
var head4 = "Percentage";
document.write(head1.bold()+"&nbsp;&nbsp;&nbsp;"+head2.bold()+"&nbsp;&nbsp;&nbsp;"+head3.bold()+"&nbsp;&nbsp;&nbsp;"
+head4.bold()+"<br>"+sub1+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks1+"&nbsp;&nbsp;&nbsp;"+percent1+"<br>"
+sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks2+"&nbsp;&nbsp;&nbsp;"+percent2+"<br>"
+sub3+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks3+"&nbsp;&nbsp;&nbsp;"+percent3+"<br>"
+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Total+"&nbsp;&nbsp;&nbsp;"+obtained+"&nbsp;&nbsp;&nbsp;"+"&nbsp;&nbsp;&nbsp;"+TotalPercentage+"<br>");