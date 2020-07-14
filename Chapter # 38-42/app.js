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
var year = prompt("Enter the year :");
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert("Leap year");
}
else {
    alert("Not Leap year");
}