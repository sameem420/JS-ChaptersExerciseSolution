// Chapter 14-16   ARRAYS 
question1
1. Declare an empty array using JS literal notation to store
student names in future.
var arrStudent=[];


question2
2. Declare an empty array using JS object notation to store
student names in future.
var studentArray=new Array();


question3
3. Declare and initialize a strings array
var arrString=["bilal","ammar","hassan","ali"];


question4
4. Declare and initialize a numbers array.
var arrNum=[1,2,3,4,5];



question5
5. Declare and initialize a boolean array.
var arrBoolean=[1,0,false,true];
alert(arrBoolean);
question5


question6
6. Declare and initialize a mixed array.
var arrMixed=[1,"bilal",true,'a'];
alert(arrMixed);



question7
7. Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like:
var qual="Qualifications";
document.write(qual.bold()+"&nbsp;");
var degrees=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
for(var i=0;i<=7;i++)
{
    document.write("<br>"+(i+1)+"&nbsp;)&nbsp;&nbsp;"+degrees[i]);
}



question8
8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like:
var arrName=new Array(3);
var arrScore=new Array(3);
var Marks=500;
var arrPercentage=new Array(3);
for(var i=0;i<3;i++)
{
   arrName[i]=prompt("Enter the student "+(i+1)+" name"); 
   arrScore[i]=prompt("Enter the score of student "+arrName[i]);
   arrScore[i]=parseFloat(arrScore[i]);
   arrPercentage[i]=(arrScore[i]/Marks)*100; 
}
//outputting the data
for(var i=0;i<3;i++)
{
    document.write("Score of&nbsp;&nbsp;"+arrName[i]+"&nbsp;is&nbsp;"+arrScore[i]+"&nbsp;Percentage:&nbsp;"+arrPercentage[i]+"%<br>");
}


question9
9. Initialize an array with color names. Display the array
elements in your browser.
var arrColor=["red","blue","green","yellow","purple"];
var size=arrColor.length;
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
var addbegin=prompt("Enter the color you want to add at the beggining"+
" of the array ");
arrColor.unshift(addbegin);
size=arrColor.length;
// Display the updated array in your browser.
var updated="The updated array is now after adding at the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
var addend=prompt("Enter the color you want to add at the end"+
" of the array");
arrColor.push(addend);
size=arrColor.length;
updated="The updated array is now after adding at the end is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
c. Add two more color to the beginning of the array.
var addbegin21=prompt("Enter the 1st more color you want to add at the beggining"+
" of the array ");
var addbegin22=prompt("Enter the 2nd more color you want to add at the beggining"+
" of the array ");
arrColor.unshift(addbegin21,addbegin22);
size=arrColor.length;
// Display the updated array in your browser.
updated="The updated array after adding 2 more colors at the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
d. Delete the first color in the array. Display the updated
array in your browser.
arrColor.shift();
size=arrColor.length;
updated="The updated array after removing ONE color from the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
e. Delete the last color in the array. Display the updated
array in your browser.
arrColor.pop();
size=arrColor.length;
updated="The updated array after removing ONE color from the last is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
var index=prompt("Enter the index at which you want to add color to "+
"the array");
index=parseInt(index);
var addmid=prompt("Enter the color which you want to add in the desired index "+index);
arrColor.splice(index,0,addmid);
size=arrColor.length;
updated="The updated array after adding color at the desired index is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser.

var index1=prompt("Enter the index at which you want to delete color to "+
"the array");
index1=parseInt(index1);
var removeColor=prompt("How many colors you want to remove");
removeColor=parseInt(removeColor);
arrColor.splice(index1,removeColor);
size=arrColor.length;
updated="The updated array after desired No of colors at the desired index is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}



question10
10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method.
alert("Enter the student's scores in an array I will sort it for you");
var Size=prompt("Enter the No of Students");
var Score=new Array(Size);
for(var i=0;i<Size;i++)
{
    Score[i]=prompt("Enter the student "+(i+1)+" Score here");
    Score[i]=parseInt(Score[i]);
}
document.write("Scores of students: ");
for(var i=0;i<Size;i++)
{
    document.write(Score[i]+"&nbsp;&nbsp;");
}
Score.sort(function(a,b){ return a-b;});
OR
Score.sort((a,b)=>a-b)
document.write("<br>");
document.write("Ordered Scores of students: ");
for(var i=0;i<Size;i++)
{
    document.write(Score[i]+"&nbsp;&nbsp;");
}



question11
11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array.
var CityNames=[];
var selectedCities=[];
var Size=prompt("Enter the number of cities");
Size=parseInt(Size);
while(Size<4)
{
    alert("Enter atleast 4 size to check the condition Please!");
    Size=prompt("Enter the number of cities again atleast four to continue");
    Size=parseInt(Size);
    if(Size>4||Size===4)
    {
        break;
    }
}
for(var i=0;i<Size;i++)
{
    CityNames[i]=prompt("Enter the name of "+(i+1)+" st city");
}
var cl="Cities List: ";
document.write(cl.bold());
for(var i=0;i<Size;i++)
{
    document.write(CityNames[i]+"&nbsp;&nbsp;");
}
document.write("<br>");
selectedCities=CityNames.slice(0,3); //Selects the first three elements of the array
Size=selectedCities.length;
var scl="Selected Cities List: ";
document.write(scl.bold());
for(var i=0;i<Size;i++)
{
    document.write(selectedCities[i]+"&nbsp;&nbsp;");
}        



question12
12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method)
var arr = ["This","is","my","cat"];
var singleString=arr.join(" ");
document.write("Array:<br>"+arr+"<br>"+"String:<br>"+singleString);



question13
13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out)
var arr=[];
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
var size=arr.length;
document.write("The first in policy is: "+arr+"<br>");
document.write("<br><br>The first out policy is: ");
for(var i=0;i<size;i++)
{
    document.write("<br>"+"OUT"+"<br>"+arr[i]);
}
arr.shift();
arr.shift();
arr.shift();
arr.shift();



question14
14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last InFirst Out)
var arr=[];
arr.unshift(2);
arr.unshift(3);
arr.unshift(4);
arr.unshift(5);
var size=arr.length;
document.write("<br>"+"The last in policy is: "+arr);
document.write("<br><br>The first out policy is: ");
for(var i=0;i<size;i++)
{
    document.write("<br>"+"OUT"+"<br>"+arr[i]);
}
arr.shift();
arr.shift();
arr.shift();
arr.shift();


question15
15.Write a program to store phone manufacturers (Apple,
    Samsung, Motorola, Nokia, Sony & Haier) in an array.
    Display the following dropdown/select menu in your
    browser using document.write() method:
var phoneArray=["Apple","Motorola","Nokia","Sony","Haier"];
var size=phoneArray.length;
for(var i=0;i<size;i++)
{
    document.write(phoneArray[i]+"<br>");
}
