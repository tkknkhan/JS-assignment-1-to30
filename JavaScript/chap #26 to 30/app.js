var userInput = Math.round(+prompt("Enter integer"))
console.log(userInput + " round off value")

var userInput = Math.floor(+prompt("Enter your integer"))
console.log(userInput + " floor value")

var userInput = Math.ceil(+prompt("Enter your integer"))
console.log(userInput + " ceil value")


var num = +prompt("Enter value")
abs = Math.abs(num)
console.log("the absolute value of " + num + " is " + abs)


var random = Math.floor(Math.random()*6 +1)
console.log(random)


var random = Math.random()
if(random <= 0.5){
console.log("HEADS")
} else{
    console.log("TAILS")
}


var random = Math.floor(Math.random()*100 + 1)
console.log("random number between 1 and 100: "+random)


var userInput = +prompt("Enter a number between 1 to 10")
if(userInput === 9 ){
    alert("YOU WIN!")
}else{
    alert("SORRY! TRY AGAIN")
}