 enum STATES {
    CHIMALTENANGO = "Chimaltenango",
    ZACAPA = "Zacapa",
    PETEN = "Peten"
};

 enum ROLES {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    DISPATCHER = "DISPATCHER",
    CLIENT = "CLIENT"
}

 type User = {
    username: string;
    location: STATES,
    age : number;
    role : string;
};

const currentUser : User = {
    username: "Max",
    location: STATES.CHIMALTENANGO,
    age: 16,
    role : "CLIENT"
};

const checkRole = (...roles : Array<string>) => {
    if(roles.includes(currentUser.role)) return "authorized"
    else return "not authorized"
};


console.log(checkRole(ROLES.CUSTOMER, ROLES.ADMIN, ROLES.CLIENT, ROLES.DISPATCHER));