import { addProduct, findProducts, products, updateProduct } from "./products/product.service";
import { faker } from "@faker-js/faker";

for (let i = 0; i < 50; i++) {
    addProduct({
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        color: faker.color.rgb(),
        price: faker.commerce.price(),
        title: faker.commerce.product(),
        stock: faker.number.int(),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(["Summer", "Winter", "Spring", "Fall"]),
        size : faker.helpers.arrayElement(["L", "S", "M", "XL"]),
        categoryId : faker.datatype.uuid()
      });
};

console.log(products);

const product = products[0];
updateProduct(product.id, {
    color: product.color
});

findProducts({
    stock : 20,
    color:"blue",
    categoryId: "123",
    tags: ["L", "M"]
})

