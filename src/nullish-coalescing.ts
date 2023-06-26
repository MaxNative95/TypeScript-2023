const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true, //we need to consider the right value when parameter that is coming is undefined or null
  };
};

/* 
the issue with || is this 
0 === false 
"" === false
false === false
*/

console.log(createProduct(1, 200, false));
console.log(createProduct(20));
console.log(createProduct(1, 0, false)); //in this case the operator || fails since it takes as false both stock and isNew parameters 
