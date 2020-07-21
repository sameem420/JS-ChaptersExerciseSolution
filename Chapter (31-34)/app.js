//CHAPTER 31 TO 34

//question1
// 1. Write a program that displays current date and time in
// your browser.
// var date=new Date();
// document.write(date);
 
//question2
// 2. Write a program that alerts the current month in words.
// For example December.
// var arrMonths=["January","February","March","April","May","June","July","August","September",
// "October","November","December"];
// var Month=new Date();
// var month=Month.getMonth();
// document.write("Current Month: "+arrMonths[month+1]);

//question3
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// document.write("Today is: "+CurrentDay);


//question4
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// var Day=new Date();
// var day=Day.getDay();
// var CurrentDay=arrDays[day];
// CurrentDay=CurrentDay.slice(0,3);
// if(CurrentDay==="Sat"||CurrentDay==="Sun")
// {
//     document.write("Its fun day");
// }
// else{
//     document.write("Its a working day");
// }

//question5
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var Date=new Date();
// var date=Date.getDate();
// if(date<16)
// {
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

//question6
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// var num=new Date();
// var millisecondsSinceMidnight=num.getTime();
// var InSeconds=(millisecondsSinceMidnight/1000);
// var InMinutes=InSeconds/60;
// document.write("Current date:- "+num+"<br>");
// document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
// document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

//question7
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var num=new Date();
// var check=num.getHours();
// if(check<12)
// {
//     alert("Its AM");
// }
// else{
//     alert("Its PM");
// }

//question8
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
// var laterDate=new Date(2020,11,31);
// document.write("Later Date: "+laterDate);

//question9
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var num1=new Date(2020,3,24);
// var num2=new Date();
// sdr=num1.getTime();
// edr=num2.getTime();
// var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
// document.write(num+" days have passed since "+num1);

//question10
// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var num1=new Date(2020,0,1);
// var num1c=num1.getTime();
// var num2=new Date();
// var num2c=num2.getTime();
// var diff=num2c-num1c;
// var secPassed=Math.floor((diff/1000));
// document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

//question11
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// var currentDate=new Date();
// var getHours=currentDate.getTime();
// var currentTime=Math.floor(getHours/(1000*60*60));
// getHours=getHours+(1000*60*60);
// var incrementedTime=Math.floor(getHours/(1000*60*60));
// var diff=incrementedTime-currentTime;
// diff--;
// var newDate=new Date();
// newDate.setHours(diff);
// document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

//question12
// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
// var currentDate=new Date();
// var currentYear=currentDate.getFullYear();
// var YearBack100=currentYear-100;
// var YearBack100Date=new Date();
// YearBack100Date.setFullYear(YearBack100);
// alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

//question13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser
// var age=prompt("Enter your age?");
// age=parseInt(age);
// var date=new Date();
// var currentYear=date.getFullYear();
// var HisAge=currentYear-age;
// var dateofBirth=new Date(HisAge);
// var yearDate=dateofBirth.setFullYear(HisAge);
// var YearOfdateofBirth=dateofBirth.getFullYear();
// document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


//question14
// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
//Sir I have checked on the net for k-billing it is 10% for the late payment surcharge

// var name=prompt("Enter your name?");
// var month=prompt("Enter the month?");
// var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
// units=parseFloat(units);
// var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
// chargesPerUnit=parseFloat(chargesPerUnit);

// var netAmountPayable=units*chargesPerUnit;
// var NetAmountPayable=netAmountPayable.toFixed(2);
// var LatePaymentSurcharge=(10/100)*NetAmountPayable;
// var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
// var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
// GrossAmountPayable=GrossAmountPayable.toFixed(2);

// var finalUnits=units.toFixed(2); 
// var finalChargesPerUnit=chargesPerUnit.toFixed(2);

// document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
// +finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
// "Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
// "<br>Gross Amount Payable (After due date): "+GrossAmountPayable);