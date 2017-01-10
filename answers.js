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
function number(a, b, c) {
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
    }
}
console.log(number(3, 2, "add"))
console.log(number(10, 3, "subtract"))

//Write a function that takes a string and a number, and returns the string repeated that many number of times. 
function check(str, num) {
    return str.repeat(num);
}

check("string", 3);

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, but as words ("one", "two", ...). 
var one_to_ten = [
    "one", "two", "three", "four", "five",
    "six", "seven", "eight", "nine", "ten",
];
for (var i = 0; i < one_to_ten.length; i++) {
    console.log(one_to_ten[i]);
}

//Write a function that uses a for loop to print the numbers from 1 to 10 inclusively, but for each number, print it that many number of times:
for (var i = 1; i <= 10; i++) {
    for (var x = 1; x <= i; x++) {
        console.log(i);
    }
}
//Write a function that takes a string, and returns the reverse of that string.
function reverse(s) {
    return s.split('').reverse().join('');
};
console.log(reverse("this is a sentence"));
//had to google for this one

//Write a function that takes a number and returns the factorial of a number.
var factorial = function(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
};
console.log(factorial(6)); // IDE crashes when I enter negative number, so I replaced it with 1. 

//Write a function that takes a phrase as a string, and returns the longest word in that phrase. 

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    console.log(word);
}

longestWord("This is short sentence");
longestWord("This is a reallyreally long sentence");

//Write a function that takes a phrase, and returns the same phrase with every word capitalized.
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
titleCase("This is another long sentence");

//Write a function that takes an array and returns the largest number of the array.

var points = [500, 130, 12, -30]; 
points.sort(function(a, b){
    return a - b
});
return points[
    points.length-1
];
