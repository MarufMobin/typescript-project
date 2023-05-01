// Union 
type NoobDeveloper = {
    name: string;
}

type JuniorDeveloper = {
    name : string;
    expertise: string;
    experience: number;
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name : "Moznu Mia",
    expertise: "javascript",
    experience: 6,
}

// Intersection 
/* 
type JuniorDeveloper = NoobDeveloper & {
    expertise: "javascript",
    experience: 6,
} */

type NextLevelDeveloper = JuniorDeveloper & {
    leaderShipExperience : number;
    level : string;
}

const developer: NextLevelDeveloper = {
    name : "Maruf",
    expertise: "Typescript",
    experience : 2,
    leaderShipExperience: 6,
    level: "mid level"
}

// Enum Type 

enum Level{
    junior = "Junior",
    mid = "Mid",
    senior = "Senior"
}

const anoterDeveloper: NextLevelDeveloper = {
    name : "Mobin",
    expertise: "Typescript",
    experience : 2,
    leaderShipExperience: 6,
    level: Level.junior
}
