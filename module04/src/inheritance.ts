class Person{

    name: string;
    age: number;
    address: string;

    // Constractor
    constructor( name:string, age: number, address: string ){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // Method 
    makeSleep( hours:number ):string{ 
        return `This ${this.name} will sleep for ${hours}`;
    }

}

// Inherited Class 
class Student extends Person{
    constructor( name:string, age:number, address: string ){
        super(name, age, address)
    }
}

const student1 = new Student('Maruf', 22, "Mirpur")
const sleepingHours = student1.makeSleep( 8 )
// console.log(student1.name, student1.age, student1.address, sleepingHours )

class Teacher extends Person{
    designation : string;
    constructor( name:string, age:number, address:string, designation: string ){
        super(name, age, address);
        this.designation = designation;
    }

    takeClasses( numOfClass: number ):string {
        return `This ${this.name} will take ${numOfClass} classes`;
    }
}

const teacher1 = new Teacher('Mobin', 22, 'Kalsi', 'Professor')

teacher1.makeSleep(8)
teacher1.takeClasses(3)