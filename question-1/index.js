//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
// Explain & TIP: Creating a copy of an array before modifying it allows you to maintain the original data. This exercise demonstrates array copying and manipulation.
var magicians_name = ["Harry Houdini", " Criss Angel", " Penn & Teller", "  David Copperfield"];
function make_great(magicians_name) {
    console.log("magicians are:-");
    console.log("\n");
    for (var i = 0; i < magicians_name.length; i++) {
        console.log(magicians_name[i]);
    }
}
make_great(magicians_name);
console.log("\n");
//modify an original array ,first make copy of an array then add some msg. 
function show_magicians(_a) {
    var magicians_name = _a.slice(0);
    console.log("modified in copy of original array");
    console.log("\n");
    magicians_name.forEach(function (element) {
        console.log(element, ",The Great");
    });
}
show_magicians(__spreadArray([], magicians_name, true));
console.log("\n");
//checking original array.
console.log(magicians_name);
