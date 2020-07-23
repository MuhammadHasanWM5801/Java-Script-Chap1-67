// Muhammad Hasan
// Chapter No 01
// // // // // // //Question_1
// alert("Greetings")
// ////Question_2
// alert("Error! Please enter a valid Password")
// ////Question_3
// alert("Welcome to js Land..\nHappy Coding!");
// ////Question_4
// alert("Welcome to js Land...")
// alert("Happy Coding!")
// ////Question_5
// alert("Hello... I canrun JS through my web browser's console")

// // // // // // //CHAPTER 2

// //QUESTION 1
// var username;
// //QUESTION 2
// var myname = "Hasan";
// //QUESTION_3
// var message;
// var message ="Hello World";
// alert("message")
// //QUESTION_4
// var std=["Jhone Doe","15 year old","Cerfied mobile Application and development"]
// alert(std[0])
// alert(std[1])
// alert(std[2])
// UESTION_5
// var x="pizza";
// for(var i=5; i>0; i--)
// {
//     for(var j=0; j<i;j++)
//     {
//         document.write(x[j])
//     }
//     document.write("<br>")  
// }

//  //QUESTION_6
//  var email="email@email.com"
//  alert("my email address is "+email);
//  //QUESTION_7
//  var book="A smarter way to learn JavaScript"
//  alert("I am trying to learn from the Book "+book);
//  //QUESTION_8
//  document.write("Yah! I can write HTML content through JavaScript")
//  //QUESTION_9
//  alert("                   ???????????????????????")

//  // // //CHAPTER 2
//  //QUESTION_1
//  var age=15
//  alert("I am "+age+" year old")
//  //QUESTION_2
// alert("You have visited this site 14 times")
//  //QUESTION_3
//  var birthyear=prompt("Enter your birth year")
//  document.write("My birth year is "+ birthyear +"<br>"+"Data type of my declared variable is number")
//  //QUESTION_4
//  var name=prompt("Enter your name")
//  var product=prompt("Enter your product")
//  var quantity=prompt("Enter your Quantity")
//  document.write(name+" ordered "+quantity+" "+product+" on XYZ Clothing store")

//  //CHAPTER 4
//  //QUESTION_1
//  var var1=1;
//  var var2=2;
//  var var3=3;
//  alert(var1+var2+var3)
//  //QUESTION_2
//  var a!,a1,ali,aA,A_a //legal
//  var !a,1a,a3s,#,%li; //illegal
//  //QUESTION_3
//  document.write("<h1> Rules for naming JS variables </h1>")    
//  document.write("Variable names can only contain $ and _. for exaxmple: $my_1stVariable")
//  document.write("<br> Variables must begin with a letter, $ or_. For example $name, _name or name <br>Variable names are case sensitive<br>Variable names should not be JS keyword")

// //CHAPTER 5
// //QUESTION_1
// var a=+prompt("enter 1st number")
//  var b=+prompt("enter 2st number")
//  var c=a+b;
//  document.write("Sum of "+a+" and "+b+" is  "+c)
// //QUESTION_2
//  var a=+prompt("enter 1st number")
//  var c=prompt("choose any operator from - + * %")
//  var b=+prompt("enter 2st number")
//  if(c==="+")
//  {
//  document.write("Sum of "+a+" and "+b+" is  "+(a+b))
//  }
//  else if(c==="-")
//  {
//      document.write("Subtraction of "+a+" and "+b+" is  "+(a-b))
//      }
//  else if(c==="*")
//  {
//      document.write("Multiplication of "+a+" and "+b+" is  "+(a*b))
//  }
//  else if(c==="%")
//  {
//      document.write("Mod of "+a+" and "+b+" is  "+(a%b))
//       }
    
// //QUESTION_3
// var a=prompt("cost of ont movie ticket is 600pkr","how many tickets do you want")
//  var c=a*600;
//  document.write("total cost to buy "+(+a)+" tickets to a movie is "+c+" PKR")
// //QUESTION_4
//  var a=+prompt("Enter a number to display a table")
//  for(var i=1;i<=10;i++)
//  {
//      document.write(a+" x "+i+" = "+a*i+"<br>")
//  }


// //CHAPTER 9-11
// //QUESTION_1
//  var city=prompt("Enter the name of city")
//  if(city==="karachi")
//  {
//      alert("Welcome to city of lights")
//  }
// //QUESTION_2
//  var gender=prompt("Enter Your Gender")
//  gender=gender.toLowerCase();
//  if(gender==="male")
//  {
//      alert("Good Morning Sir")
//  }
//  else if(gender==="female")
//  {
//      alert("Good Morning Ma'am")
//  }
//  else
//  {
//      alert("Warning! try again")
//  }
// //QUESTION_3
//  var color=prompt("Please enter the color of road traffic signals")
//  color=color.toLowerCase();
//  if(color==="red")
//  {alert("Must Stop")}
//  else if(color==="yellow")
//  {alert("Ready to Move")}
//  else
//  {alert("Move now")}
// //QUESTION_4
//  var fuel=prompt("Enter Your Remaining fuel in liter")
//  if(fuel<0.25)
//  {alert("Please refill the fuel in your car")}
//  else{alert("fuel is enough for car")}
// //QUESTION_5
//   var a = 4;
//  if (++a === 5){
//  alert("given condition for variable a is true");
//  }
//  User Input & Conditional Statement | JAVASCRIPT
//  Page 2 of 4
//  B. var b = 82;
//   if (++b === 83){
//  alert("given condition for variable b is true");
//  }
//  c. var c = 12;
//  if (c++ === 13){
//  alert("condition 1 is true");
//  }
//  if (c === 13){
//  alert("condition 2 is true");
//  }
//  if (++c < 14){
//  alert("condition 3 is true");
//  }
//  if(c === 14){
//  alert("condition 4 is true");
//  }
//  d. var materialCost = 20000;
//  var laborCost = 2000;
//  var totalCost = materialCost + laborCost;
//  if (totalCost === laborCost + materialCost){
//  alert("The cost equals");
//  }
//  e. if (true){
//  alert("True");
//  }
//  if (false){
//  alert("False");
//  }
//  User Input & Conditional Statement | JAVASCRIPT
//  Page 3 of 4
//  f. if("car" < "cat"){
//  alert("car is smaller than cat");
//  }
// //QUESTION_6
//  var math=+prompt("Enter Your Marks in Maths")
//  var phy=+prompt("Enter Your Marks in Physics")
//  var comp=+prompt("Enter Your Marks in Computer")
//  var marks=math+phy+comp;
//  var per=(marks/300) *100;
//  document.write("Total marks: 300"+"<br>Marks obtained: "+marks+" <br>Percentage "+per)
//  if(per>=80)
//  { document.write("<br>Grade: A-one <br>Remarks: Excellent")}
//  else if(per>=70)
//  { document.write("<br>Grade: A <br>Remarks: Good")}
//  else if(per>=60)
//  { document.write("<br>Grade: B <br>Remarks: You need to improve")}
//  else if(per<60)
//  { document.write("<br>Grade: Fail <br>Remarks: Sorry")}
// //QUESTION_7
//  var secret=prompt("Enter a number from 1-10");
//  if(secret==4)
//  {alert("Bingo! Correct answer")}
//   else if(secret==3 ||secret==5)
//  {alert("Close enough to the correct answer");}
//  else
//  {     alert("Please Try again! you guess a wrong number ")
//      }
    
// //CHAPTER 12-13
    
// // //QUESTION_2
// var a=prompt("Enter two integer and i will display which number is larger","Eneter 1st number");
// var b=prompt("Enter 2nd integer");
// if(a<b)
// {alert(b+" is largest")}
// else{alert(a+" is largest")}
// //QUESTION_3
//  var a=prompt("Enter 1ST integer");
//  if(a<0)
//  {alert(a+" is negative")}
//  else if(a>0)
//  {alert(a+" is positive")}
//  else
//  {alert("zero")}
// //QUESTION_3
// 1var a=prompt("Enter an alphabet i will tell you it is vowel or consonant ")
// 1if(a=="a"||a=="e"||a=="i"||a=="o"||a=="u")
// 1{alert("vowel true")}
// 1else
// 1{alert("consonant false")}
// QUESTION_4
//  var a=prompt("Enter A PASSWORD ","Please enter a password")
//  var b=prompt("Enter again")
//  if(a==b){alert("Correct! The password you entered matches the original password")}
//  else{alert("Incorrect password")}
// //QUESTION_5
//  var greeting;
//  var hour = 13;
//  if (hour < 18) 
//      {alert("Good DAY")}
//  else
//  {alert("Good evening")}

// //CHAPTER 14-15
// //QUESTION_1
// var student=[];
// //QUESTION_2
// var names=["ali","sana","sara"]
// //QUESTION_3
// var a=["SSC", "HSC", "BCS","BS", "BCOM", "MS","M. Phil", "PhD"]
// document.write("Qualification <br><br>")
//  for (var i=0;i<=7;i++)
//  {document.write(+i+" "+a[i]+"<br>")}
//Question
// for(var j=1;j<=100;j=j+10)
// {
// for(var i=j;i<=j+10;i++)
// {
//     document.write(i +" ")
// }
// document.write("<br>")
// }


// Chapter 21 to 25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var fname = prompt('Enter your First Name');
var lname = prompt('Enter your Last Name');
var fullName = fname +" "+ lname

document.write('Greetings '+ fullName) 
document.write("<br><br>")


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var mob = prompt('Enter your Favourite Phone:');

document.write('My Favourite Phone is : '+ mob+'<br>')
document.write('String Length : '+ mob.length) 
document.write("<br><br>")

// 3. Write a program to find the index of letter n in the word Pakistani and display the result in your browser .

var myStr = "Pakistan"
document.write("String:"+ myStr+ "<br> Index of n :"+ myStr.indexOf('n'))
document.write("<br><br>")

// 4.Write a program to find the last index of letter l in the word Hello World and display the result in your browser.

var hello = "Hello World";
document.write("String:"+ hello+ "<br> Last Index of l : "+ hello.lastIndexOf('l'))
document.write("<br><br>")

// Write a program to find the character at 3rd index in the word Pakistani and display the result in your browser

document.write("String:"+ myStr+ "<br> Character at 3rd Index : "+ myStr.charAt(3))
document.write("<br><br>")

// 6. Repeat Q1 using string concat() method.

var firstname = prompt('Enter your First Name');
var lastname = prompt('Enter your Last Name');
var fullName = firstname.concat(lastname)
document.write('Greetings '+ fullName) 
document.write("<br><br>")

// 7. Write a program to replace the Hyder to Islam in the word Hyderabad and display the result in your browser.

var city1 = "Hyderabad";
var city2 = "Islam" + city1.slice(5);
document.write("City:"+city1)
document.write("<br>After Replacement:"+city2)
document.write("<br><br>")

// 8. Write a program to replace all occurrences of and in the string with & and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together."
var result = message.replace(/and/g,"&")
document.write("BEFORE : "+message)
document.write("<br>AFTER : "+result)
document.write("<br><br>")

// 9. Write a program that converts a string 472 to a number 472. Display the values & types in your browser.

var Str = "472";
document.write("Value: "+Str)
document.write("<br>Type: "+typeof(Str))
var myNum = parseInt(Str)
document.write("<br>Value: "+myNum)
document.write("<br>Type: "+typeof(myNum))
document.write("<br><br>")


// 10. Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter Something:");
document.write("User input :" + userInput);
document.write("<br>Upper Case :" +userInput.toUpperCase())
document.write("<br><br>")

// 11. Write a program that takes user input. Convert and show the input in title case.
var user = prompt("Enter Something:");
document.write("User input :" + user);
var firstLetter = user.slice(0,1).toUpperCase();
var last = user.slice(1).toLowerCase();
var res = firstLetter+last;
document.write("<br>Title Case :" +res)
document.write("<br><br>")

// 12. Write a program that converts the variable num to string.

var numb = 35.36 ;
document.write("Number : " +numb)
document.write("<br>Result : " + numb.toString().replace('.',''))
document.write("<br><br>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var uName=prompt("Enter User name: ");
for(var i=0; i<uName.length; i++){
    if(uName.charCodeAt(i)===(33) || uName.charCodeAt(i)===(44) || uName.charCodeAt(i)===(46) || uName.charCodeAt(i)===(64) ){
       alert("Please Enter a Valid User Name: ");
        break;
    }
}
alert("Name: "+uName);

// 14. You have an array A = [cake, apple pie, cookie, chips, patties]
// Write a program to enable search by user input in an array. After searching, prompt the user whether the given item is found in the list or not.

	var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
    var input = prompt("Welcome to bakery! What do you want to order");
    var flag = 0;

        for (i = 0; i <= bakeryItems.length; i++) {
            if (bakeryItems[i] === input) {
                flag = 1;
                document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
            }
        }

        if (flag == 0) {
            document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
        }


        document.write("<br>" + "<br>");


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password = prompt("Enter your password")

var numbers = false;
var lowerCaseLetter = false;
var upperCaseLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerCaseLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        numbers = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperCaseLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}








// 16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser.

var university = "University of Karachi";
var arr = university.split('');

for(var i =0 ; i<arr.length;i++){
	document.write(arr[i]);
	document.write("<br>")
}

document.write("<br>" + "<br>");


// 17. Write a program to display the last character of a user input.

var inp = prompt("Enter an input : ");
var lastCh = inp.split('')

document.write("User Input : " + inp);
document.write("<br>Last Character : " + lastCh[lastCh.length-1] )
document.write("<br>" + "<br>");

// 18. You have a string The quick brown fox jumps over the lazy dog. Write a program to count number of occurrences of word the in given string

var count = 0;
var givenString = "the quick brown fox jumps over the lazy dog";

var myArray = givenString.split(" ")

for(var i = 0; i < myArray.length ; i++){
    if(myArray[i]=="the"){
        count++;
    }
}

document.write("Given String : " + givenString)
document.write("<br>Count : "+count)


// Chapter 26 to 30

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var myNumber = +prompt("Enter a Positive number:");
document.write("Number : "+ myNumber);
document.write("<br>Round Off : "+Math.round(myNumber));
document.write("<br>Floor Value : "+Math.floor(myNumber));
document.write("<br>Ceil Value : "+Math.ceil(myNumber));
document.write("<br>" + "<br>");

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var myNumb = +prompt("Enter a negative number:");
document.write("Number : "+ myNumb);
document.write("<br>Round Off : "+Math.round(myNumb));
document.write("<br>Floor Value : "+Math.floor(myNumb));
document.write("<br>Ceil Value : "+Math.ceil(myNumb));
document.write("<br>" + "<br>");

// 3. Write a program that displays the absolute value of a number.
 
 var InpNum = prompt("Enter a Number to get absolute value : ");
 document.write("Given Number : "+InpNum);
 document.write("<br>Absolute Value : " + Math.abs(InpNum))
 document.write("<br>" + "<br>");

 // 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser:

 var dice = Math.random()*6
 var result =  Math.round(dice)
 document.write("Random Dice Value :" +result)

// 5- Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var toss = Math.random() * 2;
var decision = Math.floor(toss)

    if(decision==0){
        document.write(decision+"<br>")
        document.write("heads");
    }else{
      document.write(decision+"<br>")
        document.write("tails");
    }

//6- Write a program that shows a random number between 1 and 100 in your browser.

var RandomNumber = Math.random() * 100;
var RandomResult = Math.floor(RandomNumber)
document.write("RandomNumber b/w 1 and 100:"+RandomResult)
document.write("<br>" + "<br>");

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 

var weight = prompt("Enter your weight")
var ResultValue = "";

document.write("The weight of user is" + " ");

for (i = 0; i <= weight.length - 1; i++) {
    if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57 || weight.charCodeAt(i) == 46) {
        ResultValue = weight[i];
        document.write(ResultValue);
    }

}
document.write(" " + "kilograms");


document.write("<br>" + "<br>");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretInput = +prompt("Enter a secret Number")

var secret = Math.floor(Math.random()*10);
if (secretInput==secret) {
  alert("Congratulations!")
}
else{
  alert("Better Luck Next Time")
}


// Chapter 31 to 34

// Write a program that displays current date and time in your browser.

var today = new Date()
document.write(today)
document.write("<br><br>")

// Write a program that alerts the current month in words.For example December.


var monthName = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'] 
var month = today.getMonth();
alert("Current Month : "+monthName[month])

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

var day = today.getDay()
document.write("Today is " +weekDays[day])
document.write("<br><br>")

// 4. Write a program that displays a message Its Fun day if its Saturday or Sunday today.

if (weekDays[day] == "Sun" || weekDays[day] == "Sat"){
    alert("It's Fun day")
}

// 5. Write a program that shows the message First fifteen days of the month if the date is less than 16th of the month else shows Last days of the month.

var date = today.getDate();
if (date >16){
    alert('First fifteen days of the month')
}
else{
    alert('Last days of the month')
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.


document.write('Current date : ' + today+"<br>");
document.write('Elapsed Miliseconds since Jan 1 1970 : ' + today.getTime()+"<br>") 
document.write('Elapsed Minutes since Jan 1 1970 : ' + (today.getTime())/(1000*60) +"<br><br>")


// 7. Write a program that tests whether it's before noon and alert Its AM else its PM.

if(today.getHours()>=0 && today.getHours() <= 12){
    document.write("Its AM")
}
else{
    document.write("Its PM")
}
document.write("<br><br>")

// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("Dec 31, 2020")
document.write("Later Date : "+laterDate)
document.write("<br><br>")

// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015

var Ramadan = new Date("Jun 18,2015")
var diff = (today - Ramadan)/(1000 * 60 * 60 * 24);

document.write(Math.floor(diff)+ " days since 1st Ramadan 2015 <br><br>")


// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var RefDate = new Date("Dec 05,2015")
var BegDate = new Date("Jan 01 2015")

var resultSec = (RefDate-BegDate)/1000;
document.write("Refrence Date : "+ RefDate +"<br>")
document.write(resultSec +" seconds passed since begining of 2015")
document.write("<br><br>")

// 11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var d = new Date();
document.write("Current Date : "+d+"<br>")
d.setHours(d.getHours()-1);

document.write("1 hour ago it was "+d)
document.write("<br><br>")

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var pYear = new Date();
document.write("Current Date : "+pYear+"<br>")
pYear.setFullYear(pYear.getFullYear()-100);

alert("100 back it was "+pYear)
document.write("<br><br>")

var UserAge = new Date(prompt("Enter your DOB","Jan 1 ,1970"));
var age = (today - UserAge)/(1000 * 60 * 60 * 24*365);


document.write("Your Birth Year is :"+UserAge.getFullYear()+"<br>")
document.write("Your Age is "+Math.floor(age))


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


var CustomerName = "ABC Customer";
var month = today.getMonth();
var Units = 410;
var ChargePerUnit = 16
var NetAmount = Units*ChargePerUnit;
var late = 350;
var GrossAmount = NetAmount + late;

document.write("<h1>K-ELECTRIC BILL</h1><br>")
document.write("Customer Name : "+CustomerName+"<br>")
document.write("Month : "+monthName[month]+"<br>")
document.write("Number of Units : "+Units.toFixed(2)+"<br>")
document.write("Charge Per Unit : "+ChargePerUnit.toFixed(2)+"<br>")
document.write("Net Amount Payable (within Due Date) : "+NetAmount.toFixed(2)+"<br>")
document.write("Late Payment Surcharge : "+late.toFixed(2)+"<br>")
document.write("Gross Amount Payable(after Due date) : "+GrossAmount.toFixed(2)+"<br><br>")



// Chapter 35 to 38

// 1. Write a function that displays current date & time in your browser.

function displayDateTime(){
    todayDate = new Date();
    document.write("Current Date & Time is : " + todayDate);
}
displayDateTime();
document.write("<br><br>");


// Write a function that takes first & last name and then it greets the user using his full name.

function greetings(first,second){
    result = "Greetings "+first+" "+second;
    return result;
}

var firstName = prompt("Enter your First Name : ");
var lastName = prompt("Enter Your Last Name : ");

document.write(greetings(firstName,lastName))
document.write("<br><br>");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addition(first,second){
    result = first + second
    return result;
}

var firstNum = +prompt("Enter First Number : ");
var secondNum = +prompt("Enter Second Number : ");

document.write(addition(firstNum,secondNum))
document.write("<br><br>");


// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculate (num1,num2,opt){
    if(opt == "+"){
        return num1+num2
    }
    else if(opt == "-"){
        return num1-num2
    }
    else if(opt == "*"){
        return num1*num2
    }
    else if(opt == "/"){
        return num1/num2
    }
    else if(opt == "%"){
        return num1%num2
    }
    else{
        return 'incorrect operator'
    }
}

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var opt = prompt("Enter operator","+,-,*,%,/")

alert("Result:" +calculate(num1,num2,opt))

// Write a function that squares its argument.

function square(num){
    return num*num;
}

var inputNumber = +prompt("Enter a Number to get Square:")
alert("Square = "+square(inputNumber))


// 6. Write a function that computes factorial of a number.
function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}

var UserInput = +prompt("Enter a value to get factorial : ")
alert("factorial = "+factorial(UserInput))

// Write a function that take start and end number as inputs & display counting in your browser.

function counting(start,end){
    for (var i=start;i<=end;i++){
    document.write(i+"<br>");
}

}
var start = +prompt("Enter starting number") ;
var end = +prompt("Enter end number") ;

counting(start,end);

// Write a nested function that computes hypotenuse of a right angle triangle. 

function calculateHypotenuse(base,perp){

    function calculateSquare(value){
        return value * value;
    }

    var hyp = calculateSquare(base)+calculateSquare(perp)
    return Math.sqrt(hyp)
}
document.write("Value of Hypotenuse is : "+calculateHypotenuse(3,4))
document.write("<br><br>")

// // Write a function that calculates the area of a rectangle.
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables


function area(width,height){
        return width * height
}

width = 5;
height = 6;
document.write("Area of Rectangle by values as arguments = "+area(3,4)+"<br>")
document.write("Area of Rectangle by values as variables = "+area(width,height)+"<br><br>")


// // Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str) {
  str = str.toLowerCase();
  var reverseStr = str.split('').reverse().join(''); 
  return reverseStr === str;
}

var UserString = prompt("Enter a string to check Palindrome")
alert(palindrome(UserString))

// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function titlecase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
alert(titlecase("the quick brown fox"));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

alert(longestWord("Saylani Web and Mobile Development Course"));


// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

var CheckStr = prompt("Input a String:");
var CheckLetter = prompt("Enter a character to check:");

function CharCount(str,letter){
    var count = 0;

    var SampleArray = str.split('');

    for(var i =0 ; i<SampleArray.length;i++){
        if (SampleArray[i]==letter) {
            count++;
        }
    }

    return count;
}

alert(CheckLetter+" is present "+CharCount(CheckStr,CheckLetter)+" times")


// The Geometrizer


function calcCircumference(radius){

    return (2*Math.PI*radius)


}

function calcArea(radius){
    return Math.PI *radius*radius

}


document.write("The Circumference is :"+calcCircumference(3))


document.write("<br>The Area of Circle is :"+calcArea(3))
document.write("<br>")




//////////////////////////38 TO   42///////////////////

////////////////================= pdf 38-44=============///////////////////////// 
 ////// === FUNCTIONS, switch statements, while do-while loops | JAVASCRIPT ====/////




/////////////////=========  QUESTION NO 1  ========///////////////////


  //function foo (a = 2,b ){
 //   return  a + b
 // }
 // document.write(foo (2,5))





////////////////=======   QUESTION NO 2  =========//////////////
//function leapyear(year)
//{
//return (year % 100 === 0)  ? (year % 400 === 0) : (year % 4 === 0);
///}

///console.log(leapyear(2016));
//console.log(leapyear(2000));
//console.log(leapyear(1700));
//console.log(leapyear(1800));
//console.log(leapyear(100));
//console.log( leapyear (2020));
//console.log( leapyear (2012));



//////////////////////========  QUESTION NO 4  =========//////////////////////
///var num = 88 ; 
//var num = 80;
//var num = 77;

 //function   PercentageFunction  (num){
 //return (num / 100)
// }
// console.log(  PercentageFunction(88,80,77 /100)  ) 

  //function SecondFunction(per){

 
 ///return ( 245*per)


  
 // }
 //console.log(  SecondFunction (245 ,0.88 )  )

  
 //function  mainFunction(){
   // return (245/3)
 //}
//console.log(mainFunction(245,3))


//////////////////////=========   QUESTION NO 5  ===========/////////////////////



//function  indexof (){
  //var str = "Hello world i am noor butt.";
 // var n = str.indexOf("n");
 // document.getElementById("blank").innerHTML = n;
//}



/////////////////////==========  Question no 6  ==========////////////////////////
  // var text =   " Pleases read this application and give me gratuity " ;
   //var count = 0 ; 
  // switch (text.lenght ){
  //  case 'A':
   // count++
  //  case  'a':
   //count++
   /// case 'e':
  // case 'i':
  //  case 'o':
  //  case 'u':

 
 //  console.log(1);
   // break;
  //  default:
   // console.log (0)
//}


/////////////////////=========  QUESTION NO  7 =========//////////////////////////

                          //convert to distance in meters//
//var city_km = prompt ("write your city km" , ' 1025km  distance of  karachi to lahore ') ;
//var km = 1025 ;
//var meters = 1000;

//function function1 (km,meter){
 // return  (1025 * 1000)
//}
//console.log (  function1   (1025 , 1000))


 
                             ///convert to distance in feet ///

//var km = 1025;
//var feet =  3281 ;

//function function2 (km,feet){
//return (1025 *3281)

   
//}
///console.log (function2 (1025 , 3281 ))



                              
                              /// convert to distance in inches  ///


   //var km = 1025 ;  
   //var inches =  3281;
  // function function3  (km,inches){
   // return (1025* 3281 )
 //  }
///console.log(function3(1025,3281)) 



                        /////  convert to distance in centimeters////

   //  var  km =  1025 ;
    // var centimeter = 100000 ; 


  //function function4 (){
  // return ( 1025 *100000  )

//}
///console.log (function4 (1025,100000))


                             ////////////   QUESTION NO   8    ///////////////


//var payRate =  12 ;
//var employeWorked = 42  ; 

//function   timeCalculate   (payRate , employeWorked){
//return (12 * 42)

//}
//console.log (  timeCalculate   ( 12,42 )  )   ///   output 504



//var regularPay = 504;
//var  payRate =  12 ; 
//var hour = 2;
///function overTimepay (){
 // return ( 504 + 504 * 12  * 2   )

//}
////console.log ( overTimepay ( 504,504 , 12 , 2))   // overtime pay emplyeed  12600


                               //////////// QUESTION NO  9 ///////////////
//var int = prompt (  "Please input amount for withdraw : "  ) // input value 2390

//var r = int / 100    // 100 notes 
//console .log (r  , "100 Rs. notes " )
//var b = int % 100
//console.log (b)

//var c = b / 50     // 50 notes 
//console.log ( c , "50 Rs. notes " )
//var d = b % 50
//console.log (d)


//var e = d / 10     // 10 notes 
//console.log( e, "10 Rs. notes")
//var f  = d % 10   
//console.log(f)









///////////////////43 to 48  //////////////////

// alert("Click on a link");

// function user(){
//     alert("Thanks for Purchasing a Phone from us");
// }


// function deleteRow(r) {
//   var i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("myTable").deleteRow(i);
// }


// function myover(){
//   document.getElementById("pop").src = "./images/14.png";
// }

// function mymouse(){
// document.getElementById("pop").src = "./images/15.jpg"
// }

// var btnAdd = document.querySelector('#add');
// var btnsubtract = document.querySelector('#subtract');
// var input = document.querySelector('input');


// btnAdd.addEventListener('click',() =>{
//   input.value = parseInt(input.value) + 1;
// })


// btnsubtract.addEventListener('click',() =>{
//   input.value = parseInt(input.value) - 1;
// })


//////////////////////////49 to 52///////////////////////////

// var form = document.getElementById("name-form");
// form.onsubmit = function(e){
//   e.preventDefault();
//   var result = document.getElementById("result");
//   result.innerHTML = form.email.value;
//   form.reset();
// }


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
  
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
  
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
  
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
  
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }


//Chapter 58 - 67//
//////////////////////////////////////////////////Dom //////////////////////////////////////////////////////////


//// POINT NO 2 //////

//var type = document.getElementById("lastName")
//type.nodeType
//console.log(type)
//var child = document.getElementById("lastName")
//child.childNodes
 //var childNodes = child.innerHTML;
//console.log(childNodes)

                    //// POINT NO 3 //////

//var childUpdate = document.getElementById("lastName")
//childUpdate.childNodes
//var childNoes = childUpdate.innerHTML;
//console.log(childNoes)
                  //// POINT NO 4 //////
//var firstChildId = document.getElementById( "main-content" )
 //firstChildId.firstChild
//console.log(firstChildId)


//var lastChildId = document.getElementById( "main-content" )
// lastChildId.lastChild
//console.log(lastChildId)

                     //// POINT NO 5 //////
// var getSibling = document.getElementById("lastName").nextSibling      
//console.log(getSibling)


 //var getSiblingPre = document.getElementById("lastName").previousSibling      
///console.log(getSiblingPre)

                      //// POINT NO 6 //////

//var getParentNote = document.getElementById("email").parentNode
//console.log( getParentNote)

//var getNoteType = document.getElementById("email").nodeType
//console.log(getNoteType)



/////////  POINT NO 3 /////////
         //  var input = document.getElementById("first-name")
         //  input.value ="Alex"

                        
                   //////// point no 4 //////////           
               //   var input = document.getElementById( "last-name"  )
             //    input.value ="Bank"                   

                //   var input = document.getElementById("email")
               //  input.value =  "alexbank@example.com  "

               /// QUESTION NO 2 ///
                 //// POINT NO 1 //////

//var d = document.getElementById("form-content");
//d.nodeType
//console.log( d)


                 //// POINT NO 2 //////

//var type = document.getElementById("lastName")
//type.nodeType
//console.log(type)
//var child = document.getElementById("lastName")
//child.childNodes
 //var childNodes = child.innerHTML;
//console.log(childNodes)

                    //// POINT NO 3 //////

//var childUpdate = document.getElementById("lastName")
//childUpdate.childNodes
//var childNoes = childUpdate.innerHTML;
//console.log(childNoes)
                  //// POINT NO 4 //////
//var firstChildId = document.getElementById( "main-content" )
 //firstChildId.firstChild
//console.log(firstChildId)


//var lastChildId = document.getElementById( "main-content" )
// lastChildId.lastChild
//console.log(lastChildId)

                     //// POINT NO 5 //////
// var getSibling = document.getElementById("lastName").nextSibling      
//console.log(getSibling)


 //var getSiblingPre = document.getElementById("lastName").previousSibling      
///console.log(getSiblingPre)

                      //// POINT NO 6 //////

//var getParentNote = document.getElementById("email").parentNode
//console.log( getParentNote)

//var getNoteType = document.getElementById("email").nodeType
//console.log(getNoteType)