const items : Array<string | number> = [12, 3, 5, 3, "ok"];

items.unshift("ko")
items.push(100)

console.log(items)

//TUPLE
const newItems: [string, number] = ["Hi", 200];
const user: [string, string, number, boolean, undefined] = ["Max", "Garcia", 27, true, undefined];

const [myName, lastName] = user;
console.log(myName, lastName)

//now if i try to add something to the tuple, gill throw an error because the length and type is being strongly typed
newItems.unshift(200) 
//newItems.push(false) //throws error Argument of type 'boolean' is not assignable to parameter of type 'string | number'
console.log(newItems)

