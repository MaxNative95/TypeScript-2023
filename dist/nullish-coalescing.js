"use strict";
const createProduct = (id, stock, isNew) => {
    return {
        id,
        stock: stock !== null && stock !== void 0 ? stock : 10,
        isNew: isNew !== null && isNew !== void 0 ? isNew : true,
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
