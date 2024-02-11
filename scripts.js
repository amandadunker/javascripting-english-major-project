let total;
total = prompt("What the total?");

let tipRate;
tipRate = prompt("How much do you want to tip?");

let tipCalculator;
tipCalculator = function(total, tipRate) 
{
    let tipAmount;
    if(tipRate < 1) {tipAmount = tipRate * total;}
        else{tipAmount = tipRate * .01 * total;}

        $("#response").html("Your tip is $" + tipAmount);
    };

tipCalculator(total, tipRate);

