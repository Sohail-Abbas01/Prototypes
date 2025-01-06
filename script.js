// object
const student = {
    fullnamee : "Ahmad Hussain" ,
    marks : 87.5 ,
    printmarks : function () {
        console.log("Marks =" , this.marks);
        
    }
}

// prototypes
//  const employee = {
//     calctax : function (){
//         console.log("Tax rate is 10%" );
//     }
//  }

// const Salman1 = {
//     salary : 30000,
// }
// const Salman2 = {
//     salary : 30000,
// }
// const Salman3 = {
//     salary : 30000,
// }
// salman1.__proto__ = employee;
// salman2.__proto__ = employee;
// salman3.__proto__ = employee;

// console.log(salman1);
// console.loga

// salman.calctax()

// ***********************//
// Step 1: Create a simple object
// Step 1: Create a simple object
let person = {
    name: "Ali",
    age: 25
};

// Step 2: Add a method to the prototype of the 'person' object
person.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;  // Include age
};

// Step 3: Use the method
console.log(person.sayHello());  // Output: Hello, my name is Alice and I am 25 years old.

