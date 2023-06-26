"use strict";
let message = "Hello World";
let isSenior = true;
let person = { id: "1029938746552" };
let numbers = [10, 56, 80, 120];
let nestedPerson = [
    { id: "123" },
    { id: "9000" },
    { id: "7825" },
];
let mixed = ["hola", 123, true];
const saludar = (message) => {
    console.log(message);
};
saludar("HIII");
let money = 100;
let car = "BMW";
let apiResponse = 500;
apiResponse.toString();
let numberOfClients = "569";
let month = "January";
month = 1233;
const myDinamicVar = 100;
myDinamicVar = "Hello";
let employee = {};
employee.name = "Max";
employee.age = 27;
const GetEmployeeCode = (name) => {
    if (name) {
        return 200;
    }
};
let employeeCode = GetEmployeeCode("Steve");
console.log(typeof employeeCode); // number
