// Task # 1
// function power(base,power)
// {
//     var p = 1;
//     for (var i=0; i<power; i++) {
//         p *= base;
//     }
//   return p;
// }

// alert(power(5,3));


// Task # 2
// var year = prompt("Enter the year :");
// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
// {
//     alert("Leap year");
// }
// else {
//     alert("Not Leap year");
// }


// Task # 3
// function sidesofTriangle(a,b,c)
// {
//     var Sum = (a + b + c)/2;
//     return Sum;
// }

// function Area(S,a,b,c) {
//     var area = S * ((S-a) * (S-b) * (S-c));
//     return area;
// }

// let side1 = +prompt('Enter side 1: ');
// let side2 = +prompt('Enter side 2: ');
// let side3 = +prompt('Enter side 3: ');

// var S = sidesofTriangle(side1,side2,side3);
// var A = Area(S,side1,side2,side3);
// alert("The area of Triangle is : " + A);


// Task # 4
// function mainFunction()
// {
//     let firstSubjectmarks = +prompt('Enter first Subject Marks : ');
//     let secondSubjectmarks = +prompt('Enter second Subject Marks : ');
//     let thirdSujectmarks = +prompt('Enter third Subject Marks: ');
//     var avg = Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
//     alert("The average of the marks is : " + avg);
//     var total = 100;
//     Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks);
// }
// function Average(firstSubjectmarks, secondSubjectmarks, thirdSujectmarks)
// {
//     var avg = (firstSubjectmarks + secondSubjectmarks + thirdSujectmarks)/3;
//     return avg;
// }

// function Percentage(total,firstSubjectmarks, secondSubjectmarks, thirdSujectmarks) 
// {
//     var firstSubjectPercent = (firstSubjectmarks/total)*100;
//     var secondSubjectPercent = (secondSubjectmarks/total)*100;
//     var thirdSujectPercent = (thirdSujectmarks/total)*100;
//     alert("The percentage of first Subject is : " + firstSubjectPercent);
//     alert("The percentage of second Subject is : " + secondSubjectPercent);
//     alert("The percentage of third Subject is : " + thirdSujectPercent);
// }

// mainFunction();


// Task # 5
let myStr = prompt('Enter the String: ');
let findchar = prompt('Enter the Character to find: ');
var found = findIndex(myStr,findchar);
alert("The value found at index : " + found);

function findIndex(myStr, findchar)
{
    for(var index=0; index < myStr.length; index++)
    {
        if(myStr[index] === findchar)
        {
            return index;
        }
    }
    return -1;
}