Q#1
var type = prompt("Enter your character")

if (type >= "A" && type <= "Z"){
    console.log("Uppercase Alphabets" , type)
}else if(type >= "a" && type <= "z"){
    console.log("Lowercase Alphabet" , type)
}else if(type >= 1 || type <= 100){
    console.log("Numeric Character")
}else{
    console.log("invalid Character")
}

Q#2
var num1 = +prompt("Enter Num1")
var num2 = +prompt("Enter Num2")

if(num1 > num2){
    console.log("The larger number is num1" , num1)
}else if (num1 < num2){
    console.log("The larger number is num2" , num2)
}else{
    console.log("both are equal")
}

Q#3

var userNum = +prompt("Enter Number")
if(userNum > 0) {
    console.log("Positive Value")
} else if (userNum < 0) {
    console.log("Negative Value")
}else if( userNum === 0){
    console.log("Number is Zero")
}else{
    console.log("Invalid Character")
}

Q#4

var vowels = prompt("Enter  character")

if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
        console.log("Vowels" , vowels)
    }else{
        console.log("Consonent" , vowels)
    }

Q#5
var Email = "@outlook.com"
var Pass = "SMIT"
// var confirmPassword = "SMIT"

var enterEmail = prompt("Enter your Email");
var enterPassword = prompt("Enter your Pass");
var confrimyourPassword = prompt("Re-Enter Pass");


if(Email === enterEmail){
    if (enterPassword === Pass){
        if(confrimyourPassword === Pass){
            console.log("Correct")
        }
     }else{
        console.log("Incorrect! Re-Enter Pass")
     }
 }else{
    console.log("Incorrect Email")
 }

Q#6

var greetingHour = +prompt("Enter your hours")

if(greetingHour < 13){
    console.log("Good Morning")
}else if (greetingHour > 12 && greetingHour < 17 ){
    console.log("Good Afternoon")
}else if ( greetingHour > 17 && greetingHour < 21){
    console.log("Good Evening")
}else{
    console.log("Good Night")
}

Q#7

var time = +prompt("Enter Your Hour")

if(time >= 0000 && time <= 1200){
    console.log("Good Morning")
}else if(time >= 1200 && time <=1700){
    console.log("Good Afternoon")
}else if (time >= 1700 && time <= 2100){
    console.log("Good Evening")
}else if (time >= 2100 && time <= 2359){
    console.log("Good Night")
}else{
    console.log("Something Invalid")
}

