// Mocking 
// String Type Promise 
const makePromise = ():Promise<string> =>{
    return new Promise<string> ( ( resolve, reject )=>{
        const data:string = 'Data is fetched';
        if( data ){
            resolve(data);
        }else{
            reject( "Failed to fetched data " )
        }
    } );
};

// Boolean Type Promise
const makePromiseBoolean = ():Promise<boolean> =>{
    return new Promise<boolean> ( ( resolve, reject )=>{
        const data:boolean = true;
        if( data ){
            resolve(data);
        }else{
            reject( false )
        }
    } );
};
// Using Type Alias for Object Type Promise
type DataType = {
    data: string
}

/* 
interface DataType  {
    data: string
} 
*/

const makePromiseObject = ():Promise<DataType> =>{
    return new Promise<DataType> ( ( resolve, reject )=>{
        const data:DataType = { data: "Data is Fatching.." };
        if( data ){
            resolve(data);
        }else{
            reject( "Data are not founded" )
        }
    } );
};

// Promise<string> Promise<boolean> Promise<object>

// String Type Data are here
const getPromiseData = async (): Promise<string> =>{
    const data = await makePromise();
    return data;
};

// Boolean Type Data are here
const getPromiseBoolean = async (): Promise<boolean> =>{
    const data = await makePromiseBoolean();
    return data;
};

// Object Type Data are here
const getPromiseObject = async (): Promise<DataType> =>{
    const data = await makePromiseObject();
    return data;
};


/* Using Json placeholder to fetch Data */
interface ITodo{
    userId : number;
    id: number;
    title: string;
    completed: boolean;
}
const getToDo = async ():Promise<ITodo> =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await response.json();
}

const getToDoData = async ():Promise<void> =>{
    const result = await getToDo();
    console.log(result);
}

getToDoData();
