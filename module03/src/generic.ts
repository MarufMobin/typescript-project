/* 
    General Bhabe likte pari tai holow Generic
*/

//Normal Way to Write A Array
/* 
    const rollNumbersGeneric:number[] = [ 44, 12, 4 ];
    const rollNumbersGenericTwo:string[] = ['44', '12','4']
*/
/* 
const rollNumbersOne:Array<number> = [ 44, 12, 4 ];
const rollNumbersTwo:Array<string> = ['44', '12','4']
const rollNumbersThree:Array<boolean> = [true, false]
const userNameAndRollNumber:Array<{name:string,roll:number}> = [{
    name: "Mr.X",
    roll: 1
},{
    name: "Mr.Y",
    roll: 2
},
];

*/
/* Generic Way  */

type GenericArray<T> = Array<T>

const rollNumbersOne:GenericArray<number> = [ 44, 12, 4 ];
const rollNumbersTwo:GenericArray<string> = ['44', '12','4']
const rollNumbersThree:GenericArray<boolean> = [true, false]

type NameRollType = {name:string,roll:number}

const userNameAndRollNumber:GenericArray<NameRollType> = [{
    name: "Mr.X",
    roll: 1
},{
    name: "Mr.Y",
    roll: 2
},
];

// Using Tuple Generic type 
type GenericTuple<X,Y> = [ X, Y ];

const relation: GenericTuple<string,string> = ["Maruf", "Mobin"];

const relationWithSelary:GenericTuple<object,string> = [
    {
        name: "Maruf",
        salary: 10000,
    },
    "Mobin"
];

const relationWithSelary2:GenericTuple<{name:string, salary: number },string> = [
    {
        name: "Maruf",
        salary: 10000,
    },
    "Mobin"
];

// Alias Type using for Define type 
type RelationWithSalaryType = { name: string; salary: number }

// Interface type Using For Define Type 
interface IRelationWithSalaryType{
    name: string,
    salary: number
}

const relationWithSelary3:GenericTuple<RelationWithSalaryType,string> = [
    {
        name: "Maruf",
        salary: 10000,
    },
    "Mobin"
];