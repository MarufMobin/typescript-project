// Default Function
// Note : there are when we using default value then we are given that 2nd parametter because of Typescript are not accept first parameter default value 
const addSum = ( num1: number, num2: number = 10 ) :number => num1 + num2;
addSum(30);

// Spread Operator
const myFriends = [ "Rocky", "Mukit", "Munna" ];
const newFriends = [ "Monika", "Khadija", "Nisa" ];

myFriends.push(...newFriends);
console.log( myFriends );

// Rest Operator 
const greedFriends = ( ...friends : string[] ) : void => friends.forEach( ( friend ) => console.log(`Hi ${friend} `))

greedFriends("Maruf", "Rocky", "Mukit", "Harun")


// Array and Object Destructuring 
// Array 
const [ bestFriend ] = myFriends;

// Object
const myBestFriend = {
    fullName : "Hadi",
    age: 22
}

const { fullName: myFriendName } = myBestFriend; // there are no need any type only using a alias name

console.log( myFriendName )