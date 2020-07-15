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
function sidesofTriangle(a,b,c)
{
    var Sum = (a + b + c)/2;
    return Sum;
}

function Area(S,a,b,c) {
    var area = S * ((S-a) * (S-b) * (S-c));
    return area;
}

let side1 = +prompt('Enter side 1: ');
let side2 = +prompt('Enter side 2: ');
let side3 = +prompt('Enter side 3: ');

var S = sidesofTriangle(side1,side2,side3);
var A = Area(S,side1,side2,side3);
alert("The area of Triangle is : " + A);
