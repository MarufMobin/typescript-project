// Ternary Operator 
const age:number = 22;
const isAdult = age >= 18 ? 'Yes' : 'No';
// console.log(isAdult)

// Nullish Coeslancing Operator
// Null and undefine er upor vitti kre know akta value set kra

const isAuthenticatedUser = null
const userName = isAuthenticatedUser ?? "Guest";
console.log( userName );

// Optional Chaining er Sathe oo nallish Coeslancing operator
type Manus = {
    name : string;
    age : number;
    address: {
        city: "No City",
        road : "No Road",
        home?: "",
    }
}

const manus1: Manus = {
    name: "Manus",
    age: 55,
    address:{
        city: "No City",
        road:"No Road"
    }
}

// Jodi know balue undifine na thake then jodi tate kichu show krte hoi then amra ai doroner kaj krte pari 
const home = manus1?.address?.home ?? "No Home";
console.log( {home} );