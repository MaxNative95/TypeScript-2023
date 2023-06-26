import { BaseModel } from "../base.model";
import { Category } from "../categories/category.model";

export type Sizes = "S" | "M" | "L" | "XL";

export interface Product extends BaseModel {
    title : string;
    image : string;
    description : string;
    color : string;
    price: number | string;
    isNew : boolean;
    tags : string[];
    stock : number;
    size?: Sizes;
    category : Category
};





