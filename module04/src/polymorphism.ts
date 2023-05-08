class APerson{
    takeNap():void{
        console.log('I am Sleeping 8 hours per day');
    }
}

class AStudent extends APerson{
    takeNap(): void {
        console.log(`I am Sleeping 10 Hour per day`);
    }
}

class Developer extends APerson{
    takeNap(): void {
        console.log(`I am Sleeping 5 hours per day`);
    }
}

function getNap( param: APerson ){
    param.takeNap()
}

const person1 = new APerson();
const person2 = new AStudent();
const person3 = new Developer();

getNap( person1 )
getNap( person2 )
getNap( person3 )

/* More Example Polymorphism */
class Shape{
    getArea():number{
        return 0
    }
}

// Area -> pi * r * r
class Circle extends Shape{
    radius : number;
    constructor( radius: number ){
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI*this.radius * this.radius;
    }
}

class Ractangle extends Shape{
    height: number;
    width: number;
    constructor( height: number, width: number ){
        super();
        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

function getAreaOfShape( param: Shape ){
    console.log(param.getArea());
}

getAreaOfShape( new Circle(10))
getAreaOfShape( new Ractangle(10,20))