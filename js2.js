const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1]; 
const secondToLastLetterOfLastName = lastName[lastName.length-2];

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  //In this example, subarray has the value [[10, 11, 12], 13, 14], nestedSubarray has the value [10, 11, 12], and element has the value 11 .

const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
var removedFromMyArray = myArray.pop();
var removedFromMyArray1 = myArray.shift(0)
myArray.unshift(["Paul", 35]);

function reusableFunction(){
    console.log("Hi World");
  }
reusableFunction();
function functionWithArgs(a,b){
    console.log(a+b);
  }
  functionWithArgs(1,2);
function timesFive(num) {
    return num * 5;
  }
  const answer = timesFive(5);
  console.log (answer);
// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
function myLocalScope() {
    // Only change code below this line
    var myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);
// Setup
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  var outerWear ="sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();





