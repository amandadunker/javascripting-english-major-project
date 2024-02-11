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


