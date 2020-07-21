//CHAPTER 35 to 38

//question1
// 1. Write a function that displays current date & time in your
// browser

// displayDate();
// function displayDate()
// {
//     var date=new Date();
//     document.write(date);
// }


//question2
// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// var firstName=prompt("Enter the first Name: ");
// var secondName=prompt("Enter the second Name: ");
// greet(firstName,secondName);
// function greet(fn,ln)
// {
//     var fullName=fn+ln;
//     alert("Welcome "+fullName);
// }


//question3
// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var sum=sum(num1,num2);
// alert("The sum of "+num1+" and "+num2+" is: "+sum);
// function sum(n1,n2)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var sum=n1+n2;
//     return sum;
// }


//question4
// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.
// var num1=prompt("Enter first number:");
// var num2=prompt("Enter second number:");
// var operator=prompt("Enter +,-,* or / to perform");
// var check=false;
// if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
// {
//     check=true;
// }
// else{
//     check=false;
// }
// while(check===false)
// {
//     alert("Please enter right operation");
//     operator=prompt("Enter the operatoion +,-,x or / to perform");
//     if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
//     {
//         check=true;
//         break;
//     }
// }
// var result=calculator(num1,num2,operator);
// if(operator==="+")
// { 
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The sum of "+num1+" and "+num2+" is: "+result);
// }
// else if(operator==="-")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The difference of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="*")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The product of "+num1+" and "+num2+" is: "+result)
// }
// else if(operator==="/")
// {
//     document.write("Number 1:"+num1+"<br>");
//     document.write("Number 2:"+num2+"<br>");
//     document.write("Operation: "+operator+"<br>");
//     document.write("The division of "+num1+" and "+num2+" is: "+result)
// }
// function calculator(n1,n2,o)
// {
//     n1=parseInt(n1);
//     n2=parseInt(n2);
//     var result;
//     if(o==="+")
//     { 
//         result=n1+n2;
//     }
//     else if(o==="-")
//     {
//         result=n1-n2;
//     }
//     else if(o==="*")
//     {
//         result=n1*n2;
//     }
//     else if(o==="/")
//     {
//         result=n1/n2;
//     }
//     return result;
// }


//question5
// 5. Write a function that squares its argument.
// var num=prompt("Enter a number to find its square?");
// var result=square(num);
// document.write("The square of "+num+" is = "+result);
// function square(n)
// {
//     n=parseInt(n);
//     var square=n*n;
//     return square;
// }

//question6
// 6. Write a function that computes factorial of a number
// var fact=prompt("Enter a number to find its factorial?");
// var result=factorial(fact);
// document.write("The factorial of "+fact+" is = "+result);
// function factorial(n)
// { 
//     n=parseInt(n);
//     var fact=1;
//     for(var i=1;i<=n;i++)
//     {
//         var result=fact*(n-i);
//         var fact=fact+result;
//     }
//     return fact;
// }


//question7
// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// var ns=prompt("Enter the starting number?");
// var ne=prompt("Enter the ending number?");
// while(ns>ne)
// {
//     alert("Enter right number");
//     ns=prompt("Enter the starting number?");
//     ne=prompt("Enter the ending number?");
//     if(ns<=ne)
//     {
//         break;
//     }
// }
// counting(ns,ne);
// function counting(sn,en)
// {
//     sn=parseInt(sn);
//     en=parseInt(en);
//     for(var i=sn;i<=en;i++)
//     {
//         document.write(i+"<br>");
//     }
// }


//question8
// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// var b=prompt("Enter the base of triangle");
// var p=prompt("Enter the prependicuar of trianlge");
// var result=hypotenous(b,p);
// document.write("The hypotenous of base"+b+" and "+" prependicular "+p+" is = "+result);
// function hypotenous(b,p)
// {
//     b=parseInt(b);
//     p=parseInt(p);
//     var h=square(b,p);
//     function square(b,p)
//     {
//         var bi=b*b;
//         var pi=p*p;
//         var sum=bi+pi;
//         return sum;
//     }
//     return h;
// }


//question9
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// var w=prompt("Enter the width of rectangle");
// var h=prompt("Enter the height of rectamgle");
// var result=Area(w,h);
// document.write("The area of rectangle is: "+result);
// function Area(w,h)
// {
//     w=parseFloat(w);
//     h=parseFloat(h)
//     var a=w*h;
//     return a;
// }


//question10
// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.
// var s=prompt("Enter the string to check for palindrome");
// palindrome(s);
// function palindrome(s)
// {
//     var spl;
//     spl=s.split("").reverse().join("");
//     if(s===spl)
//     {
//         alert(s+" is a palindrome");
//     }
//     else{
//         alert(s+" is not a palindrome");
//     }
// }

//question11
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// var s=prompt("Enter the string");
// var s1=capital(s);
// document.write(s1);
// function capital(s)
// {
//    var s=s.split(" ");
//    var len=s.length;
//    for(i=0;i<len;i++)
//    {
//     s[i] = s[i][0].toUpperCase() + s[i].substr(1);
//    }
//    return s.join(" ");
    
// }

//question12
// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// var str=prompt("Enter the string");
// var strr=fLW(str);
// document.write("The longest word is: "+strr);
// function fLW(str) {
//     var strSplit = str.split(' ');
//     var lW = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > lW){
//       lW = strSplit[i].length;
//        }
//     }
//     return lW;
//   }

//question13
// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'
// var str=prompt("Enter str");
// var letter=prompt("Enter letter");
// var res=char_count(str,letter);
// document.write(letter+" is "+res+" times");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }



//question14
// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2?r
// Area of circle = ?r2
// var radius=prompt("Enter the radius");
// radius=parseInt(radius);
// calcCircumference(radius);
// calcArea(radius);
// function calcCircumference(radius)
// {
//     var c=2*(3.14)*radius;
//     document.write("The crcumference is: "+c+"<br>");
// }
// function calcArea(radius)
// {
//     var a=(3.14*radius*radius);
//     document.write("The radius is: "+a);
// }
//CHAPTER 35 to 38
///////////////////////////////////////////////////////////////////////////////////////