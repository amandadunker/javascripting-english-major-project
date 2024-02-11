# Week 6: Abstraction

Don't repeat yourself: define them more abstractly to make them reusable

let f;
f = function() {return "I am a return value." };
f();

let makeFullName, hughessFullName;
makeFullName = function(firstName, lastName){
    return firstName + " " + lastName;
}
hughessFullName = makeFullName("Langston", "Hughes");
console.log("Is your name " + hughessFullName + "?");

You can chain methods: 
let turtles, sortedReverseTurtles;
turtles = ["Leonardo", "Donatello", "Raphael", "Michelangelo"];
sortedReversedTurtles = turtles.sort().reverse.()

.sort and .reverse return arrays; .pop returns the value of the popped off element
>>>>>>> Stashed changes
