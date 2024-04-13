// Q#1. // Declare and initialize an empty multidimensional array. (Array of arrays)

// var mulDim = ["apple"];
//    mulDim = mulDim.concat("banana")
// console.log(mulDim)

//Q#2.
    // var matrixArr1 = [ [0, 1, 2, 3] ] 
    // var matrixArr2 = [  [1, 0, 1, 2] ]   
    // var matrixArr3 = [  [2, 1, 0, 1]]   
    // // console.log(matrixArr1.length)
    // console.log(matrixArr1)
    // console.log(matrixArr2)
    // console.log(matrixArr3)
    // document.write(matrixArr1 + "<br>" + matrixArr2 + "<br>" + matrixArr3 + "<br>")  


// Q#3
    // var i = 1
    // for(i ; i <= 10; i++)    {
    //     console.log(i)
    //     document.write(i + "<br>")
    // }

//Q#4
    // var tableNum = +prompt("Enter your required table Number")
    // var tableLen = +prompt("Enter your required table Length")

    // for(i = 1; i<=tableLen; i++){
    //     console.log(tableNum + "X" + i + "=" + tableNum*i )
    //     document.write( tableNum + "X" + i + "=" + tableNum*i + "<br>" )
    // }

// //Q#5

// var fruitArr = ["Apple" , "Mango" ,  "Orange" , "Banana" , "Berry" ]
// var fruitLen = +prompt("Enter your Length 1-4")
// for ( i=0; i<=fruitLen; i++){
//     console.log(fruitArr[i])
//     document.write(fruitArr[i] + "<br>")
// }

// Q#6

// a .
// Forward Counting 
// var countNum = 1
// for(countNum; countNum<=15; countNum++){
//     console.log(countNum)

// b.
// Reverse Counting
//    var countNum = 10
//    for(countNum; countNum>=1; countNum--){
//     console.log(countNum)
//    }


// c.
// var evenCount=0
// for(evenCount; evenCount<=20; evenCount++){
//     if(evenCount % 2 === 0){
//         console.log(evenCount , "Even")
//     }
// }

// //d.
//     var oddCount = 0
// for(oddCount; oddCount<=20; oddCount++){
//     if(oddCount % 2 !== 0){
//         console.log(oddCount , "Odd")
//     }

// }

//e.

// var seriesCount = 2
// for(seriesCount; seriesCount<=20; seriesCount += 2){
//     console.log(seriesCount +"k")
//     document.write(seriesCount + "k" + "</br>")
// }

// Q#7
// let A = [24, 53, 78, 91, 12];
// let largest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// console.log("The largest number in the array is: " + largest);

// Q#8
// let A = [24, 53, 78, 91, 12];
// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }

// console.log("The smallest number in the array is: " + smallest);

// Q#9
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }
// Q#10
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Enter an item to search: ");
// let found = false;

// for (let i = 0; i < A.length; i++) {
//     if (A[i] === userInput) {
//         found = true;
//         break;
//     }
// }

// if (found) {
//     console.log(userInput + " is found in the list.");
// } else {
//     console.log(userInput + " is not found in the list.");
// }
