//Write a function that takes a string and returns the first character of the string. 
var name = "apple";
console.log(name[0]);

//Write a function that takes a string and returns the last character of a string.
var name = "orange";
console.log(name[5]);

//Write a function that takes a string and a number, and returns the character at the position represented by the number.
var things = ["line", 10];
console.log(things[1]);

//Write a function that takes two numbers and adds them together.
function add(a, b) {
    return a + b;
}
console.log(add("tree", 2)); //it attaches the string to the number

//Write a function that takes two numbers and multiplies them together. 
function mutiply(x, y) {
    return x * y;
}
console.log(mutiply("rabbit", 10)); //NaN is shown when a string replaces the number.

//Write a function that takes two numbers and a string.
function number(a, b ,c) {
    if (c === "add") {
        return a + b;
    }
    else if (c === "subtract") {
        return a - b;
    }
    else if (c === "mult") {
        return a * b;
    }
    else if (c === "div") {
        return a / b;
    }
    else {
        return 0
    }}
    console.log(number(3,2,"add"))
    console.log(number(10,3,"subtract"))

//Write a function that takes a string and a number, and returns the string repeated that many number of times. 
function check(str,num){
        return str.repeat(num);
    }

check("string",3);



