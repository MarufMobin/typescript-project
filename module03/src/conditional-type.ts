// A type is dependent on another type it call Conditional Type

type a1 = null;
type a3 = undefined;
type a4 = number;

// Single Condition 
type a2 = a1 extends string ? string : null;

// Nested Condition 
type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;

type Sheikh = {
    wife1 : string;
    wife2: string;
};

// Check Sheikh wife are valid or not
/* 
type CheckProperty<T> = T extends { wife1: string } ? true : false;
type CheckWife1 = CheckProperty<Sheikh>; */

// Check Sheikh wife are valid or not Using Generic 

/* Conditional type er upor bhiti kre akta type re upor arekta type check krte parchi */
type CheckProperty<T, k > = k extends keyof Sheikh  ? true : false;
type CheckWife1 = CheckProperty<Sheikh, "wife1">;

// More Example for type Cheking or Type Condition
type Bandhobi = 'Monika' | 'Rachel' | 'Pheobe'

type RemoveBandhobi<T, U > = T extends U ? never : T

type CurrentBandhobi = RemoveBandhobi<Bandhobi, 'Monika'>;