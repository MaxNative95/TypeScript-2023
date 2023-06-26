import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto";
import { Product } from "./product.model";
import { faker } from "@faker-js/faker";

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto) : Product => {
  const newProduct = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      updatedAt: faker.date.recent(),
      createdAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: Product['id'], product : UpdateProductDto) : Product => {
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];
    products[index] = { ...prevData, ...product};
    return products[index];
};

export const findProducts = (item: FindProductDto): Array<Product> => {
    
    return products;
}
