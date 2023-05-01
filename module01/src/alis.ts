// Alias Type are using String , Boolean , Array , Object
type CrushType = {
    name: string;
    age?: number; // Optional Type
    profession: string;
    adress: string;
}

const crush1: CrushType = {
    name: 'Moyna Pakhi',
    age: 22,
    profession: 'Web Developer',
    adress: 'Uganda'
}

const crush2: CrushType = {
    name: 'Tiya Pakhi',
    age: 22,
    profession: 'Next level Developer',
    adress: 'Maxico'
}

// Boolean
type CrushMarriedType = boolean;
const isCrushMarried : CrushMarriedType = false;

// String
type CourseName = string;
const courseName : CourseName = 'Next Level Web Development';

// Function Alias 
// type OperationType = ( x: number, y: number ) => number

const calculate = ( 
    number1: number, // 10
    number2: number, // 20
    operation:( x: number, y: number ) => number  // ( x,y ) => x - y ( 10 , 20 ) => 10 + 20 
    ) =>{
    return  operation( number1, number2 );
}
calculate( 10, 20, ( x, y ) => x + y )
calculate( 10, 20, ( x, y ) => x - y )
calculate( 10, 20, ( x, y ) => x * y )