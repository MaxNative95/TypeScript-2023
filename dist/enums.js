"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATES = void 0;
var STATES;
(function (STATES) {
    STATES["CHIMALTENANGO"] = "Chimaltenango";
    STATES["ZACAPA"] = "Zacapa";
    STATES["PETEN"] = "Peten";
})(STATES = exports.STATES || (exports.STATES = {}));
;
const getUser = (user) => {
    console.log(typeof user.age);
    return console.log(user);
};
getUser({
    username: "Max",
    location: STATES.CHIMALTENANGO,
    age: 12
});
