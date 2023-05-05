type MyInfoType = {
    name : string;
    age : number;
    salary : number;
}

const  myInfoTwo: MyInfoType = {
    name: "Maruf",
    age: 100,
    salary: 1000
}

const addMeInMyCrushMindTwo = <T>( myInfoTwo: T ) : T[] =>{
    return [myInfoTwo]
}

const result6 = addMeInMyCrushMindTwo<MyInfoType>( myInfoTwo )


// Constraints are here
type MendatoryTypes = { 
    name : string,
    age : number, 
    salary : number 
}

// Mendatory Interface
interface MendatoryInterfaceType{ 
    name : string,
    age : number, 
    salary : number 
}


const addMeInMyCrushMindThree = <T extends MendatoryTypes>(myInfoTwo: T ) => {
    const crush = "Kate Winslet"
    const newData = { ...myInfoTwo, crush };
    return newData;
}

type MyInfoTypeTwo = {
    name: string;
    age: number;
    salary: number;
    other1: boolean;
    other2: null;
}
const myInfoNewData: MyInfoTypeTwo = {
    name: "maruf",
    age: 22,
    salary: 10000,
    other1: true,
    other2: null
}
const result7 = addMeInMyCrushMindThree<MyInfoTypeTwo>(myInfoNewData)

