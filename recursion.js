//push and pop funtions on an empty array
let array = [];
array.push(4);
array.push(5);
array.push(6);
array.pop();
console.log(array);

//using shift and unshift functions on array
let array1 = ["a", "b", "c"];
array1.shift();
array1.unshift("z");
console.log(array1);

//using slice function
let array3 = [1, 2, 3, 4, 5];
let newArray = array3.slice(1, 4); 
console.log(newArray);

//using splice function
let colors = ["red", "yellow", "brown", "white"];
colors.splice(2, 1, "purple", "black");
console.log(colors);

//

let car = {
    make: "Rolls-Royce",
    model: "Phantom",
    year: 2024
};
console.log(car);

delete car.year;

console.log(car)

//
// Create an object representing a person
let person = {
    name: "sindhu",
    age: 22,
    address: {
        street: "road no.33",
        city: "suryapet",
        zipcode: "508213"
    }
};
console.log(person);
console.log(person.address.city);


