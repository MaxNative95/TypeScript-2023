let message: string = "Hello World";
let isSenior: boolean = true;
let person: Object = { id: "1029938746552" };
let numbers: Array<number> = [10, 56, 80, 120];
let nestedPerson: Array<Object> = [
  { id: "123" },
  { id: "9000" },
  { id: "7825" },
];

let mixed: Array<string | boolean | number> = ["hola", 123, true];

const saludar = (message: string): void => {
  console.log(message);
};

saludar("HIII");

let money: string | number = 100;

let car: unknown = "BMW";

let apiResponse: number | null = 500;

apiResponse.toString();

type NumberClients = string | undefined;
let numberOfClients: NumberClients = "569";

let month: any = "January";
(month as number) = 1233;

const myDinamicVar : any = 100;
(myDinamicVar as string) = "Hello";

type Employee = {
  name: string;
  age: number;
};

let employee = {} as Employee;
employee.name = "Max";
employee.age = 27;

const GetEmployeeCode = (name: string): number | void => {
  if (name) {
    return 200;
  }
};

let employeeCode = GetEmployeeCode("Steve") as number;
console.log(typeof employeeCode); // number
