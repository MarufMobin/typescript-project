const arrayOfNumbers = [ 1, 2, 3 ]; // Convert String array 
const arrayOfStrings = arrayOfNumbers.map( ( num ) => num.toString() )
console.log( arrayOfStrings )

type Volume = {
    height: number;
    width: number;
    depth: number;
};

type Area <T> = {
    // [ key in keyof Volume ] : Volume[key] ; // Volume['height'] -->  number 
    [ key in keyof T ] : T[key]; // Generic 
    // readonly [ key in keyof T ] : T[key]; // Read Only 
}

const  area1 : Area<{height: number, width: string }> = { height: 11, width: "area"};

type AreaString = {
    height: string;
    width: string;
}

type AreaReadonly = {
    readonly height: number;
    readonly width: number;
}
const rectangularArea: AreaReadonly = {
    height: 10,
    width: 12
}

/* 
type A = AreaNumber['height']  // look up Types 
type B = keyof AreaNumber;  // 'width' | 'height'

const obj = {
    name: "Maruf"
}
obj['name'] */