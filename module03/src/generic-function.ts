// Arrow Function
const createArray = ( param:string ):string[] =>{
    return [ param ];
};

const result = createArray('Bangladesh');

// Generic Function Arrow
const createArray1 = <T>( param:T ):T[] =>{
    return [param];
}

// Generic Function normal function
function createArray3<T>( param:T ):T[]{
    return [param];
}

const resultGeneric = createArray1<string>('Generic Funtion');
const resultGeneric2 = createArray1<boolean>(false);

// Extra Type Declared here
type Name = { name: string };
const result3 = createArray1<Name>({name: "Bangladesh"});

// Multiple Generic Are here
const createArray2 = <X,Y>( param1:X, param2:Y ):[X,Y] =>{
    return [ param1, param2 ];
}

const result4 = createArray2<string,string>( "maruf", "mubin");

// Spread Operator
const crush = "Kate Winslet";
const myInfo = {
    name: "Maruf",
    age : 24,
    salary : 100000000
}
const newData = { ...myInfo, crush };

/* 
    Generic Function with Spread Operator
    When we are pass a param and that value are using to spread 
    then runtime it's Compile that is not well for program that's 
    why we are using Generic Type Such as
*/
// Normal Way te Try kra holow jate amra full data pai na kron type compile er agei declare hoye jache ti Generic ta use kra hbe 

// const addMeInMyCrushMind = ( myInfo: object )  =>{
//     const crush = "Kate Winslet";
//     const newData = { ...myInfo, crush };
//     return newData;
// }

const addMeInMyCrushMind = <T>( myInfo: T )  =>{
    const crush = "Kate Winslet";
    const newData = { ...myInfo, crush };
    return newData;
}

const result5 = addMeInMyCrushMind( myInfo );

/* 
    Ei khane Return hisebe sudhu ( crush ) asbe myInfo ta pawa jabe na kron ( Spread ) ta run time e compile hoye thake ti ai khane Generic type ta Must Use krte hbe 
    Jehetu Spread ta compile howar age type ta nirdharon korche ti Generic use kre type ta Inference kre dite hbe 
*/
