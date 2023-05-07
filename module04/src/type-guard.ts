/* 
    keyof guard 
*/

type Alphanumaric = string | number

function add( param1: Alphanumaric, param2: Alphanumaric ): Alphanumaric{
    if( typeof param1 === 'number' && typeof param2 === 'number' ){
        return param1 + param2;
    }
    else{
        return param1.toString() + param2.toString();
    }
}

const res = add('1', '2')
const sumRes = add(1,2)

/* 
    In Guard 
*/

type NormalUserType = {
    name: string;
}
type AdminUserType = {
    name: string;
    role : 'admin' // string literal
}

function getUser( user: NormalUserType | AdminUserType ): string{
    if( 'role' in user ){
        return `I am an admin my role is ${user.role}`;
    }
    else{
        return `I am a normal User`;
    }
}

const normalUser1 : NormalUserType = { name: 'Mr.Kallu' };
const adminUser1 : AdminUserType = { name: 'Mr. Gallu', role : 'admin' };

// console.log(getUser(normalUser1))
// console.log(getUser(adminUser1))

 /* 
    instaceof guard
 */

class AnotherAnimal{
    name: string;
    species: string;
    constructor( name: string, species: string ){
        this.name = name;
        this.species = species;
    }
    makeSound(){
        console.log('I am making Sound');
    }
}

class Dog extends AnotherAnimal{
    constructor( public name: string, public species: string ){
        super( name, species );
    }
    makeBark(){
        console.log('I am Barking');
    }
}

class Cat extends AnotherAnimal{
    constructor( public name: string, public species: string ){
        super( name, species );
    }
    makeMeaw(){
        console.log("i am Meawing")
    }
}

function getAnimal( animal: AnotherAnimal ){
    if( animal instanceof Dog ){
        animal.makeBark();
    }
    else if( animal instanceof Cat ){
        animal.makeMeaw();
    }
    else{
        animal.makeSound();
    }
}

const animal1 = new Dog('Geman Bhai', 'Dog'); // instance -> Dog
const animal2 = new Cat('Parsian Bhai', 'Cat'); // instance -> Cat 

getAnimal( animal1 )
getAnimal( animal2 )

/* Type Checked Using function */
function isDog( animal:AnotherAnimal ): animal is Dog{
    return animal instanceof Dog;
}

function isCat( animal:AnotherAnimal ): animal is Cat{
    return animal instanceof Cat;
}

function CheckedAnimal( animal: AnotherAnimal ){
    if( isDog( animal ) ){
        animal.makeBark();
    }
    else if ( isCat( animal ) ){
        animal.makeMeaw();
    }
    else{
        animal.makeSound()
    }
}

/* 
    Note : 
    We are now knowing many kind of type guards 
    type guard are most importend for type 
    We are using type guards we are not using type Alias 
    Because of type alias are not well practice 
    So, We are using type guard and we are depandent type of type guard also we are access full fill property when using type guard 
*/

