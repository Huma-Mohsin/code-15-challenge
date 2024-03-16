// // // //Question 45: Cars: Create detailed car objects with flexible properties.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// // // Explain & TIP: Functions accepting a mix of fixed and arbitrary parameters let you create detailed and flexible objects. This is ideal for data with a few required fields and many optional fields.
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//solution.
//Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//details
//  This function takes in a required manufacturer (string), modelName (string), and an options object that can contain arbitrary key-value pairs.
function specification_of_car(manufacturer, modelName, options) {
    //const car_details = { ... }: This line creates an object car_details to store information about the car. The object contains keys for manufacturer and modelName, and it spreads the options object to include any additional key-value pairs provided.
    var car_details = __assign({ manufacturer: manufacturer, modelName: modelName }, options);
    //printing all the information about the car.
    console.log(car_details);
}
// Call the function with required information and additional name-value pairs
//This line calls the specification_of_car function with the required information (manufacturer: "Toyota", modelName: "Camry") and two additional name-value pairs (color: "blue", year: 2022) provided as an object.
specification_of_car("Toyota", "Camry", { color: "blue", year: 2022 }); //extra info provided in an object form.
specification_of_car("KIA", "Rio", { color: "Metallicc", Transmission: "Automatic" });
specification_of_car("Hundai", "Elantra", { Class: "Compact car (C)", Layout: "Front-engine, front-wheel-drive" });
