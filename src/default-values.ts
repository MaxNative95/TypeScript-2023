export const createProduct = (
    id: string | number,
    stock: number = 10,
    isNew: boolean = true
  ) => {
    return {
      id,
      stock: stock ?? 10,
      isNew: isNew ?? true,
    };
  };
  
  console.log(createProduct(1, 200, false));
  console.log(createProduct(20));
  console.log(createProduct(1)); 
  