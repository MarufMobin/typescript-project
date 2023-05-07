/* class Animal{
    // Type Define are here
    name: string;
    species: string;
    sound: string;

    // Create Constractor
    constructor( name: string, species: string, sound: string ){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
  
    // Using normal function / method 
    // Note : Arrow function are not supported this keyword 
    
   makeSound(){
    console.log(`The ${this.name} says ${this.sound}`);   
   }
}

// class instance 
const dog = new Animal('German Shephard', 'dog', 'Ghew Ghew');
const cat = new Animal('persian', 'cat', 'meaw meaw');

dog.makeSound()
cat.makeSound()
*/


// Using Parameter Propertise and Optimize the code 
class Animal{
    constructor( public name:string, public species: string, public sound: string ){}
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

// Make instance 
const cat = new Animal('Persian', 'cat', 'meaw meaw');
cat.makeSound()