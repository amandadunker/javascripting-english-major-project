# Week 5: Arrays
Collections of data surrounded by brackets

let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", 1, null, true, arrayOfNumbers, [4.5, 5.6]];

//$("#response").html(arrayOfStrings[0]);
//calling for 0 prints "a", calling for 2 prints "c" because the index starts with 0
//objects are surrounded by curly brackets. Arrays have indexes while objects have properties.
//use dot notation to access properties of objects
//arrays also have properties that you don't have to specify, like length (everything is really an object in javascript)

When you use a function as a property, the properties are called methods.


let turtles, sortedTurtles, reversedTurtles, turtleNames;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedTurtles = turtles.sort();
//abc order
reversedTurtles = turtles.reverse();
//reverse abc order?
turtleNames = turtles.join(" ");
//lists all as one item
turtles.push("Splinter");
//adds Splinter to the array
turtles.pop();
//returns the original 

let string, firstLetter, stringLength;
string = "This is a string.";

//Strings have indices and lengths, just like arrays: 
firstLetter = string[0];
//prints T

stringLength = string.length;
//stringLength is 17

//Strings also have methods just like arrays:

let upperCaseString, replacedString;
upperCaseString = string.toUpperCase();
//prints upperCaseString as THIS IS A STRING

replacedString = string.replace("string", "pipe");
replacedString prints "This is a pipe."