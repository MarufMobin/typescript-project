// Type Assertion 
let emni: any;

emni = "Next Level Web Development";

( emni as string ).length;
<string>emni.length;

// Assertion Type using function 
function KgToGram( param:string|number ): string | number | undefined {
    if( typeof param === "string"){
        const value = parseFloat( param ) * 1000
        return `The Converted result is ${value}`;
    }
    if( typeof param === "number" ){
        const value = param * 1000;
        return value;
    }
    else{
        return undefined
    }
}

const resultToBeString = KgToGram("100") as string

// const resultToBeNumber = KgToGram(100) as number

const resultToBeNumber = <number>KgToGram(100) 

console.log( resultToBeNumber)
console.log( resultToBeString )


type CustomErrorType = {
    massage : string;
}
try{

}catch( err ){
    console.log( (err as CustomErrorType).massage );
}

/* 
    Jokhon amra jani je typescript thake besi Sure je data r type ta ki then amra type Asertion use kre thaki ati 2 doroner syntex hoye thake

    1. => as string
    2. => <string>
*/