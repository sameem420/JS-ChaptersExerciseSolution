Chapter 17-20              ARRAYS AND LOOP
question1
1. Declare and initialize an empty multidimensional array.
(Array of arrays)
question1
var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 


question2
2. Declare and initialize a multidimensional array
representing the following matrix:
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var size =matrix.length;
for(var i=0;i<3;i++)
{
    for(var j=0;j<4;j++)
    { 
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}


question3
3. Write a program to print numeric counting from 1 to 10.
for(var i=0;i<10;i++)
{
    document.write((i+1)+"<br>");
}


question4
4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.
var number = prompt("Enter a number to show its multiplication table");
number=parseInt(number);
var mul;
var length=prompt("Enter the length of multiplication table");
length=parseInt(length);
while(length===-1||length===0)
{
    alert("Please! Enter a positive number for length");
    length=prompt("Enter the length of multiplication table");
    length=parseInt(length);
    if(length>0)
    {
        break;
        alert("Correct Now see the table");
    }
}
document.write("Multiplication table of &nbsp;"+number+"<br>");
document.write("Length &nbsp;"+length+"<br>");
for(var i=1;i<=length;i++)
{
    mul=number*i;
    document.write("<br>"+number+" x "+i+" = "+mul);
}



question5
5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]
var fruits = ["apple","banana","mango","orange","strawberry"];
var size=fruits.length;
for(var i=0;i<size;i++)
{
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<size;i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}



question6
6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<b>Counting:</b><br>");
for(var i=1;i<=15;i++)
{
    document.write(i+" , ");
}
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br><br><b>Reverse Counting:</b><br>");
for(var i=15;i>=1;i--)
{
    document.write(i+" , ");
}
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<br><br><b>Even:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+" , ");
}
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<br><br><b>Odd:</b><br>");
for(var i=1;i<=20;i=i+2)
{
    document.write(i+" , ");
}
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<br><br><b>Series:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+"k, ");
}



question7
7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example:
question7
var A = ["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
var size=A.length;
var check=false;
for(var i=0;i<=size;i++)
{
    if(search===A[i])
    {
        alert(search+" is available at index "+(i+1)+" of our bakery");
        check=true;
        break;
    }
}
if(check==false)
{
    alert("We are sorry "+search  +" is not available in our bakery");
}


question8
8. Write a program to identify the largest number in the
given array.
A = [24, 53, 78, 91, 12].
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var larger=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]>larger)
    {
        larger=A[i];
    }
}
document.write("<br>The largest number is "+larger+"<br><br>");



question9
9. Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12]
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var small=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]<small)
    {
        small=A[i];
    }
}
document.write("<br>The smallest number is "+small+"<br><br>");



question10
10. Write a program to print multiples of 5 ranging 1 to
100.
for(var i=1;i<=100;++i)
{
    if(i%5==0)
    {
        document.write(i+" , ");
    }
}
