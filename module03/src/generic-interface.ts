/* Generic Interface */
interface CrashInterface<T, U = null >{
    name: string;
    husband: T;
    wife?: U;
}

const crush1:CrashInterface<boolean, string>={
    name: "mili",
    husband: true,
    wife: "Shokina"
}

const crush2:CrashInterface<string>={
    name: "mimi",
    husband: "Rocky"
}

interface HusbandInterface{
    name:string,
    salary: number
}

const crush3:CrashInterface<HusbandInterface>={
    name: "mim",
    husband: {
        name: "Jojo",
        salary: 10000,
    }
}

interface PersonInterface{
    name: string, 
    age: number
}
/* 
    Generic Interface ,
    Generic Type,
    Generic Interface er modhe aker odhik type or interface declare krte pari
*/
const crush4: CrashInterface<PersonInterface,PersonInterface> = {
    name: "mimia",
    husband:{
        name: "parsian",
        age: 30
    },
    wife:{
        name: "Winslet",
        age: 20
    }
}


/* 
    Generic Interface 
    Generic interface er modhe Multiple generic type bebohar kora jai 
    type er khatre Defalt type dewa jai 
*/