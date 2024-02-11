let myHabaneroSauceSquirts, myBurritoObject;

//Define and assign a variable for spiciness.
myHabaneroSauceSquirts = 3;

//Assign the burrito object
myBurritoObject = {
tortilla:"wheat",
guacamole: true,
beans: "pinto",
habaneroSauceSquirts: myHabaneroSauceSquirts,
spiciness: function() {
    if (myHabaneroSauceSquirts > 0 ) {
        alert("This is a spicy burrito!");
    } else {
        alert("This is a mild burrito.");
    }
}

};
$("#response").html("Your burrito has " +
myBurritoObject.habaneroSauceSquirts + " squirts of habanero.");
myBurritoObject.spiciness();
