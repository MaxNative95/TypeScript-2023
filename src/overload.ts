// Max => [M, a, x] => insert a string and return an array
// M,a,x => Max => inset an array and return a string

function parseString(input: string): Array<string>; // OVERLOAD
function parseString(input: Array<string>): string; // OVERLOAD

function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(""); //returns string
  } else if (typeof input === "string") {
    return input.split(""); // returns array of strings
  } else if(typeof input === "boolean"){
    return true // boolean
  }
}

const response1 = parseString("Max");
response1.reverse(); // We can now use methods
console.log(response1);

console.log(parseString(["M", "a", "x"]));
