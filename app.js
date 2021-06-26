// 1. Write a program that displays current date and time in
// your browser.

// var a = new Date();
// document.write (a + "<br>");


// 2. Write a program that alerts the current month in words.
// For example December.



//  var m = ["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"]
//  var currentMonth = new Date()
//   alert(m[currentMonth.getMonth()]);
 

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var month = prompt("Enter a month");
// var charInMonth = month.length;
// if (charInMonth > 3){
//     monthAbbrev = month.slice(0,3);
// //     alert(monthAbbrev);
// }

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
//     }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var str = prompt("Enter some text");
// var numchar = str.length;
// for(var i = 0; i < 16; i++){
//     if(str.slice(i,i + 2) === ""){
//         alert("First fifteen days of month");
//         break
//     }
// }
// if(matchfound === fale){
//     alert("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var a = newDate();
// document.write(a = "<br>");


// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var lastDay = function(y,m){
//     return  new Date(y, m +1, 0).getDate();
//     }
//     console.log(lastDay,(2020,0));
//     console.log(lastDay(2020,1));
//     console.log(lastDay(2020,11));
        
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// function gmod(n,m){
// 	return ((n%m)+m)%m;
// }

// function kuwaiticalendar(adjust){
// 	var today = new Date();
// 	if(adjust) {
// 		adjustmili = 1000*60*60*24*adjust; 
// 		todaymili = today.getTime()+adjustmili;
// 		today = new Date(todaymili);
// 	}
// 	day = today.getDate();
// 	month = today.getMonth();
// 	year = today.getFullYear();
// 	m = month+1;
// 	y = year;
// 	if(m<3) {
// 		y -= 1;
// 		m += 12;
// 	}

// 	a = Math.floor(y/100.);
// 	b = 2-a+Math.floor(a/4.);
// 	if(y<1583) b = 0;
// 	if(y==1582) {
// 		if(m>10)  b = -10;
// 		if(m==10) {
// 			b = 0;
// 			if(day>4) b = -10;
// 		}
// 	}

// 	jd = Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+day+b-1524;

// 	b = 0;
// 	if(jd>2299160){
// 		a = Math.floor((jd-1867216.25)/36524.25);
// 		b = 1+a-Math.floor(a/4.);
// 	}
// 	bb = jd+b+1524;
// 	cc = Math.floor((bb-122.1)/365.25);
// 	dd = Math.floor(365.25*cc);
// 	ee = Math.floor((bb-dd)/30.6001);
// 	day =(bb-dd)-Math.floor(30.6001*ee);
// 	month = ee-1;
// 	if(ee>13) {
// 		cc += 1;
// 		month = ee-13;
// 	}
// 	year = cc-4716;

// 	if(adjust) {
// 		wd = gmod(jd+1-adjust,7)+1;
// 	} else {
// 		wd = gmod(jd+1,7)+1;
// 	}

// 	iyear = 10631./30.;
// 	epochastro = 1948084;
// 	epochcivil = 1948085;

// 	shift1 = 8.01/60.;
	
// 	z = jd-epochastro;
// 	cyc = Math.floor(z/10631.);
// 	z = z-10631*cyc;
// 	j = Math.floor((z-shift1)/iyear);
// 	iy = 30*cyc+j;
// 	z = z-Math.floor(j*iyear+shift1);
// 	im = Math.floor((z+28.5001)/29.5);
// 	if(im==13) im = 12;
// 	id = z-Math.floor(29.5001*im-29);

// 	var myRes = new Array(8);

// 	myRes[0] = day; //calculated day (CE)
// 	myRes[1] = month-1; //calculated month (CE)
// 	myRes[2] = year; //calculated year (CE)
// 	myRes[3] = jd-1; //julian day number
// 	myRes[4] = wd-1; //weekday number
// 	myRes[5] = id; //islamic date
// 	myRes[6] = im-1; //islamic month
// 	myRes[7] = iy; //islamic year

// 	return myRes;
// }
// function writeIslamicDate(adjustment) {
// 	var wdNames = new Array("Ahad","Ithnin","Thulatha","Arbaa","Khams","Jumuah","Sabt");
// 	var iMonthNames = new Array("Muharram","Safar","Rabi'ul Awwal","Rabi'ul Akhir",
// 	"Jumadal Ula","Jumadal Akhira","Rajab","Sha'ban",
// 	"Ramadan","Shawwal","Dhul Qa'ada","Dhul Hijja");
// 	var iDate = kuwaiticalendar(adjustment);
// 	var outputIslamicDate = wdNames[iDate[4]] + ", " 
// 	+ iDate[5] + " " + iMonthNames[iDate[6]] + " " + iDate[7] + " AH";
// 	return outputIslamicDate;
// }
// document.write(writeIslamicDate());


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// function Test()
// {
//     var s1 = new StopWatch();

//     s1.Start();        

//     // Do something.

//     s1.Stop();

//     alert( s1.ElapsedMilliseconds );
// } 

// // Create a stopwatch "class." 
// StopWatch = function()
// {
//     this.StartMilliseconds = 0;
//     this.ElapsedMilliseconds = 0;
// }  

// StopWatch.prototype.Start = function()
// {
//     this.StartMilliseconds = new Date().getTime();
// }

// StopWatch.prototype.Stop = function()
// {
//     this.ElapsedMilliseconds = new Date().getTime() - this.StartMilliseconds;
// }

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// document.write(currentDate);
// var oneHourago = new Date();
// document.write(oneHourago);


// 12. Write a program that creates a date object and show the
// // date in an alert box that is reset to 100 years back?

// var a = new Date();
//  alert(a + "<br>" );
//  var d = new Date();
//  d.setFullYear(d.getFullYear(), d.getMonth() - 100);
//  alert(d);


//  13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var today = new Date();
// var a = today.getTime();
// var myBirth = new Date("28 may , 1997");
// var b = myBirth.getTime();
// var c = a -b;
// var age = Math.ceil(c/(1000*60*60*24*30*12))
// alert("Age of Nimra is" = age);


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:


  
// void main()
// {  
//    int custid, conu;
//    float chg, surchg=0, gramt,netamt;
//    char connm[25];

//    printf("Input Customer ID :");
//    scanf("%d",& custid);
//    printf("Input the name of the customer :");
//    scanf("%s",connm);
//    printf("Input the unit consumed by the customer : ");
//    scanf("%d",&conu);
//    if (conu <200 )
// 	chg = 1.20;
//    else	if (conu>=200 && conu<400)
// 		chg = 1.50;
// 	else if (conu>=400 && conu<600)
// 			chg = 1.80;
// 		else
// 			chg = 2.00;
//    gramt = conu*chg;
//    if (gramt>300)
// 	surchg = gramt*15/100.0;
//    netamt = gramt+surchg;
//    if (netamt  < 100)
// 	netamt =100;
//    printf("\nElectricity Bill\n");
//    printf("Customer IDNO                       :%d\n",custid);
//    printf("Customer Name                       :%s\n",connm);
//    printf("unit Consumed                       :%d\n",conu);
//    printf("Amount Charges @Rs. %4.2f  per unit :%8.2f\n",chg,gramt);
//    printf("Surchage Amount                     :%8.2f\n",surchg);
//    printf("Net Amount Paid By the Customer     :%8.2f\n",netamt);

// }  

                                // ...E
//  1. Write a program that takes a positive integer from user &
//     display the following in your browser. 

// var a = prompt();
// var a = 3.45214;
// var b = Math.round(a);

// var c = Math.ceil(a);
// var e = Math.floor(a);
// console.log(a,b,c,e );


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.

// var a = prompt();
//  var a = -3.45214;
//  var b = Math.round(a);

//  var c = Math.ceil(a);
//  var e = Math.floor(a);
//  console.log(a,b,c,e );


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5.


// document.write(Math.abs(-4)+"<br>"); 
// //     document.write(Math.abs(5));   ;

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// alert('You rolled a ' + diceRoll);


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// var head = 1;
// var tail = 2;

// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("0 <br> Random Coin Value: Head")
// } else if(floor === 1)
// {
//     document.write("1 <br> Random Coin Value: Tails")
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.


// var randomNum ;
// randomNum = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNum)

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:


// var a= prompt("Entre your wight in kilosgrama")
// function onlyNumber(fld) {
//     if(fld.value.match(/[^0-9.]/)) {
//         fld.value=fld.value.replace(/[^0-9.]/g,'');
//     }
// }

// function convertUnit(lbs, kilo) {
//    retValue = 0;

//    if (isNaN (kilo)) { alert ('Non-numeric value');  return 0; }
//        kilo = parseFloat (kilo);
//        var factor = 0.4536;

//    if (lbs == 'kg2lb') {
//         retValue = kilo/factor;
//    }

//    else if (lbs == 'lb2kg') {
//         retValue = kilo*factor;
//    }

//    return retValue;
// }


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var y = Math.floor(Math.random() * 10 + 1);
      
// // counting the number of guesses
// // made for correct Guess
// var guess = 1;
  
// document.getElementById("submitguess").onclick = function(){
  
// // number guessed by user     
// var x = document.getElementById("guessField").value;

// if(x == y)
// {    
//    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
//            + guess + " GUESS ");
// }
// else if(x > y) /* if guessed number is greater
//                than actual number*/ 
// {    
//    guess++;
//    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
// }
// else
// {
//    guess++;
//    alert("OOPS SORRY!! TRY A GREATER NUMBER")
// }
// }

