//Chapter 12-13              IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS 
// question1
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// question1
// var num=prompt("Enter the number or string");
// var num1=parseInt(num);
// if(num.charCodeAt(0)>=65&&num.charCodeAt(0)<=90)
// {
//     alert("It is the upper case letter")
// }
// else if(num.charCodeAt(0)>=97&&num.charCodeAt(0)<=122)
// {
//     alert("It is the lower case letter");
// }
// else if(Number.isInteger(num1))
// {
//     alert("its an number");
// }
// else
// {
//     alert("It is something else");
// }
 

// alert(String.fromCharCode(65,66,67)); // returns 'ABC'
// question1


// question2
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var num=prompt("Enter the first number");
// var num1=parseInt(num);
// num=prompt("Enter the second number");
// var num2=parseInt(num);
// if(num1>num2)
// {
//     alert("The number 1 is larger");
// }
// else if(num2>num1)
// {
//     alert("The number 2 is larger");
// }
// else if(num1==num2)
// {
//     alert("The number 1 and number 2 are equal");
// }
// question2


// question3
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var num=prompt("Enter the number");
// var num1=parseInt(num);
// if(num1===0)
// {
//     alert("The number is equal to zero");
// }
// else if(num1>0)
// {
//     alert("The number is positive");
// }
// else if(num1<0)
// {
//     alert("The number is negative");
// }
// question3


// question4
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// var len=prompt("Enter a character i.e(The length of string 1)");
// var str=len.length;
// str=parseInt(str);
// if(str===1)
// {
//     len=len.toLowerCase();
//     if(len==="a"||len==="e"||len==="i"||len==="o"||len==="u")
//     {
//         alert("True its a vowel");
//     }
//     else{
//         alert("False its not a vowel");
//     }
// }
// else{
//     alert("Please Enter a character i.e(The length of string 1)");
// }
// question4


// question5
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// var pas1=prompt("Please! Enter a password");
// var len=pas1.length;
// len=parseInt(len);
// while(len===0)
// {
//     alert("Please enter a password here");
//     pas1=prompt("Please! Enter a password");
//     len=pas1.length;
//     len=parseInt(len);
//     if(len!=0)
//     {
//         break;
//     }
// }
// var pas2=prompt("Please!Re-Enter the password");
// if(pas1===pas2)
// {
//     alert("Correct the password entered matches the original password");
// }
// else if(pas1!=pas2)
// {
//     alert("Incorrect password");
// }


// question5

// question6
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else
// {
// greeting = "Good evening";
// alert(greeting);
// }
//The brackets {} were not there correctly
//Answer
// question6

// question7
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// var time=prompt("Enter the time in 24 hours");
// var timecheck=time.length;
// while(timecheck!=4)
// {
//     alert("Enter the time in 24 hours");
//     time=prompt("Enter the time in 24 hours");
//     timecheck=time.length;
//     if(timecheck===4)
//     {
//         break;
//     }
// }
// if(time>=0000&time<1200)
// {
//     alert("Good morning");
// }
// else if(time>=1200&&time<1700)
// {
//     alert("Good afternoon");
// }
// else if(time>=1700&&time<2100)
// {
//     alert("Good evening")
// }
// else if(time>=2100&&time<=2359)
// {
//     alert("Good night");
// }
// else
// {
//     alert("Where are you coming out of the required condition Its 24 hour time program");
// }
// question7            
