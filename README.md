# Week 6: Abstraction

Don't repeat yourself: define them more abstractly to make them reusable

~~~
let f;
f = function() {return "I am a return value." };
f();

let makeFullName, hughessFullName;
makeFullName = function(firstName, lastName){
    return firstName + " " + lastName;
}
hughessFullName = makeFullName("Langston", "Hughes");
console.log("Is your name " + hughessFullName + "?");
~~~
You can chain methods: 
~~~
let turtles, sortedReverseTurtles;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedReversedTurtles = turtles.sort().reverse.()
~~~
.sort and .reverse return arrays; .pop returns the value of the popped off element

a for loop takes three parameters: the initialization, condition, and afterthought

~~~
let userString, upperCaseMinusE,upperCasedString;

userString = prompt("What do you want to UPPeRCASe?");

//Create the function.
upperCaseMinusE = function(string) {
    let result;
    result = "";

    //Create a for loop inside the function to go through the string letters 1 by 1 
    for ( let i = 0; i < string.length ; i = i + 1) {
        let letter;
        letter = string[i];

        //the if else says if the user types "e" leave it, otherwise capitalize it. The user decides what e looks like, if they type E it stays that way.

if ( letter === "e" ) {
    result = result + letter;
} else {
    result = result + letter.toUpperCase();
}
    }
    return result;
};

//Pass the user's string to the function and assign the return value to a variable.

upperCasedString = upperCaseMinusE(userString);

//Print the string to the webpage.

$("#response").html(upperCasedString);
~~~

.forEach() is for iterating over arrays because it is common

~~~
let userString, upperCaseMinusE, upperCasedString;
userString = prompt("What do you want to UPPeRCASe?")
upperCaseMinusE = function(string) {
    let result = "";
    //convert the string to an array so we can use forEach()
    stringArray = string.split("");
    stringArray.forEach(function(letter) {
        if ( letter === "e") {
            result = result + letter;
        } else {
            result = result + letter.toUpperCase();
        }
    })
    return result;
};
upperCasedString = upperCaseMinusE(userString);
$("#response").html(upperCasedString)
~~~

~~~
let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = "";

//turtles is an array of objects which each have three properties

turtles.forEach(function(turtle){
    weapons = weapons + turtle.weapon + " ";
  })
  
$("#response").html(weapons);
~~~

.map() is another method that can be used instead of .forEach()
.join creates a string out of an array. .split is the opposite, turns a string into an array based on the parameter sent to it 

~~~
let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];
weapons = turtles.map(function(turtle){
    return turtle.weapon ;
}).sort().join(", ");
$("#response").html(weapons);
~~~

~~~
let leonardo, donatello, raphael, michelangelo, turtles, weapons;
leonardo = {name: "Leonardo", color: "blue", weapon: "katana"};
donatello = {name: "Donatello", color: "purple", weapon: "bo"};
raphael = {name: "Raphael", color: "red", weapon: "sai"};
michelangelo = {name: "Michelangelo", color: "blue", weapon: "nunchaku"};
turtles = [leonardo, donatello, raphael, michelangelo];

let names, namesWithO;
names = turtles.map(function(turtle){
    return turtle.name;
}).sort();
namesWithO = names.filter(function(name){
    return name.includes("o");
}).join(", ");
$("#response").html(namesWithO);
~~~