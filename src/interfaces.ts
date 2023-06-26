type Age = number | string;
type userId = string | number;
export type Sizes = "S" | "M" | "L" | "XL";

type DataBases = {
    name : string;
    amount : number | string;
    date : Date;
}
interface Names {
    name: string;
    age : Age;
    address: string;
    profession: unknown;
}

export interface Product {
    id : string;
    name : string;
    createdAt : string | number;
}

