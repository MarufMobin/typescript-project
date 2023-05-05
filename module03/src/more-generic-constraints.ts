type PersonType = {
    name : string;
    age : number;
    address: string;
};

type newType = "name" | "age" | "address"; // Manually Union make

type newTypeUsingKeyOf = keyof PersonType

const a : newType = "name"
const b : newTypeUsingKeyOf = "name"

/* 
     Keyof er madhome manually union type declare na kre amra chaile akta type er key gulow bebohar kre notun type krte pari jekhane ager type er key gulow union hisbe bebohar hbe
*/

function getProperty<X,Y extends keyof X >( obj: X, key: Y ){
    return obj[key];
} 

const property = getProperty({name: "maruf", age: 22 }, "age");

/* 
    getProperty<X,Y extends keyof X >( obj: X, key: Y )
    -> ai khane Y extends keyof er dara bujache je Y , X er value ke extend kre niye Key hisebe kaj krche 
    it means 
    y = 'name' | 'age'

    So,Akta Generic type er upor arekta Generic type ta Constraints ba force krte pari
*/