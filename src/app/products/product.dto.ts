import { Product } from "./product.model";


export interface CreateProductDto extends Omit<Product, "id" | "createdAt" | "updatedAt" | "category"> {
    categoryId : string;
};

export type CreateProductPick = Pick<Product, "color" | "description">

export interface UpdateProductDto extends Partial<CreateProductDto> {

};

export type UpdateProductDtoType = Partial<Product>;

export type RequiredExample = Required<Product>;

export interface FindProductDto extends Readonly <Partial<Omit<CreateProductDto, | "tags">>> {
       readonly tags : ReadonlyArray<string>
}

