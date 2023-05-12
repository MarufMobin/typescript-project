// Pick 
interface Person{
    name: string;
    email?: string;
    contactNo: string;
}

// Pick
type Contact  = Pick< Person,"contactNo" | "email">

// Omit 
type Name = Omit< Person, "contactNo" | "email">

// To make all the properties to be option then we are using pertial
// Pertial
type optional = Partial<Person>

// Require 
type requireProperties = Required<Person>

// readonly 
const person : Readonly<Person> ={
    name : "maruf",
    email : "maruf@gmail.com",
    contactNo: '39483924932'
}

// person.name = "mobin" -> Cannot assign to 'name' because it is a read-only property

// Record type 
// type myObj = {
//     a3: string;
//     b3: string;
//     c3: string;
// }
//  Using index Signeture
/* 
    type myObj ={
        [key : string] : string; 
    } 
*/
// Record 
type myObj = Record<'a' | 'b' | 'c', string>

const obj: myObj = {
    a : '1',
    b : '2',
    c : '3'
}
