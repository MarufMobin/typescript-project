/* 
    Type Alias er motoi holow Interface tobe aita base use kra hoi Object er khatre abong ati extends kra jai
*/
// Type Alias 
type User = {
    name : string;
    age : number;
};

// Interface 
interface IUser{
    name: string;
    age : number;
}

const userWithTypeAlias: User = {
    name: "type Alias",
    age : 100
}

const userWithTypeInterface: IUser = {
    name: "Interface",
    age: 200
}

/*
     Interface er data extends oo kra jai 
*/

interface IUser2{
    name: string;
    age : number;
}

interface IExtendUser2 extends IUser2{
    role: string;
}
const user2: IExtendUser2 = {
    name: "maruf",
    age: 20,
    role: "developer"
}

/* 
    Type Alias er Daraw extends kra jai 
*/
type User3 = {
    name: string;
    age: number;
};

type extendedUser3 = User & {
    role: string;
}

const user3: extendedUser3 = {
    name: "maruf",
    age: 22,
    role: "developer"
}

// Function er khatre Type Alias 
type addNumbersType = ( num1:number , num2: number ) => number;

const addNumbers = (num1: number, num2: number ) : number => num1 + num2; // Without Type Elias 

// With Type Elias
const addNumbersTwo : addNumbersType = ( num1, num2 ) => num1 + num2;

// using interface to define type
interface IAddNumbers{
    ( num1: number, num2: number ):number;
}
const addNumberUsingInterface:IAddNumbers = ( num1, num2 ) => num1 + num2;

// Array Using Type Alias
type rollNumbersType = number[]
const rollNumbers:rollNumbersType = [ 1, 2, 3, 4 ]; 

// Array Using Type interface 
interface IRollNumbers {
    [ index:number ]:number;
}

const number2:IRollNumbers = [1, 4, 5]

/* 
    Note : When we are using Object then we are using interface also other data then we are using type alias
*/
