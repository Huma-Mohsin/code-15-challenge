// // // // Sandwiches: Summarize sandwich orders with varying ingredients.
// // // Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments, useful for handling lists of data like sandwich ingredients.
// // Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// //solution.
// function makeSandwich(...arbitaryitems: string[]): void {: This line declares a function named makeSandwich. It takes any number of arguments, all of which must be strings (string[]). The ...arbitaryitems syntax is called a rest parameter, allowing the function to accept an arbitrary number of arguments and store them in an array named items. The : void specifies that the function does not return any value.
function make_subway_Sandwich() {
    var arbitary_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arbitary_items[_i] = arguments[_i];
    }
    //print a message at console
    console.log("BUILD YOUR FAVOURITE SUB");
    //iterate a loop over arbitary items
    arbitary_items.forEach(function (element) {
        //console.log("- " + item);: This line logs each item of the sandwich with a preceding hyphen (-) to the console. It concatenates the hyphen and the current item to form a string representation of the sandwich ingredient.
        console.log("-" + element);
    });
}
console.log("MEAT CHOICES OR VEGGIES CHOICES");
console.log("\n");
//Call the function three times, using a different number of arguments each time.
make_subway_Sandwich("Chicken Ham", "Tuna", "Egg Mayo", "Onions", "Tomato");
console.log("\n");
make_subway_Sandwich("Meat Balls", "Lettuce", "Tomato", "Olives", "cucumber");
console.log("\n");
make_subway_Sandwich("Roasted Beef", "carrots", "cheese", "cucumber", "onion");
