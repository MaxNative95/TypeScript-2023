export enum STATES {
    CHIMALTENANGO = "Chimaltenango",
    ZACAPA = "Zacapa",
    PETEN = "Peten"
};

export enum ROLES {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER"
}

export type User = {
    username: string;
    location: STATES,
    age : number;
    role : ROLES;
};

const getUser = (user:User) : void => {
    console.log(typeof user.age)
   return console.log(user); 
};

getUser({
    username: "Max",
    location: STATES.CHIMALTENANGO,
    age : 12,
    role : ROLES.CUSTOMER
})
