

let person = {
    name: "Ali",
    Details() {
        return `My name is ${this.name} and my age is ${this.age}`;
    }
};

let persondetail = Object.create(person);
person.name = "Ahmad";
persondetail.age = 15;

persondetail.Getdetail = function() {
    return `Name: ${this.name}, Age: ${this.age}`;
};


console.log(persondetail.Getdetail());  









// let person = {
//     name: "Ali",
//     age: 25
// };

// // Step 2: Add a method to the prototype of the 'person' object
// person.sayHello = function() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;  // Include age
// };

// // Step 3: Use the method
// console.log(person.sayHello());  

