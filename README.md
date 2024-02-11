# Week 4: Functions
// creates a comment, /* turns an entire section into a comment
parameters go inside parentheses
prompt is a function, its parameters are inside parentheses:
prompt(promptText [like a question], defaultText [such as an instruction before anyone has typed anything])
We can change the values of the variables promptText and defaultText to change the parameters of prompt()

let tipCalculator;
tipCalculator = function(total, tipRate) {
    //Calculate the percentage of the total as a variable "tipAmount"
    let tipAmount;
    tipAmount = tipRate * total;
    //Change #response to tell us the tip amount
    $("#response").html("Your tip is $" + tipAmount);
};
//Now execute the function, passing a total of $50 and rate of 20%
tipCalculator(100, 0.2);
