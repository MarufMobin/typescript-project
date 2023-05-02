// Nullable type 
const searchName = ( value : string | null ) =>{
    if( value === null ){
        console.log("This is nothing to search");
    }else{
        console.log("Searching...");
    };
};

// searchName("Maruf")
searchName(null)

// unknown type 
// er value Runtime e jana jai ki value asche type ati unknown type hoye thake 
const getMyCarSpeed = ( speed: unknown ) =>{
    if( typeof speed === 'number' ){
        const convertedSpeed = ( speed * 1000 ) / 3600;
        console.log( `My Speed is ${convertedSpeed}` );
    }
    if( typeof speed === 'string' ){
        const [value, unit ] = speed.split(' ');
        const convertedSpeed = ( parseFloat( value ) * 1000 ) / 3600;
        console.log( `My Speed is ${convertedSpeed}` );
    }else{
        console.log('There is Wrong type')
    }
}

getMyCarSpeed(10)
getMyCarSpeed("10 kmh^-1")
getMyCarSpeed(true)

// Never Type 
// jodi know function er return na thake and tate dynamicaly know error show krate hoy then never type use hoi ati return er alternative
// string Massage but return type ta hobe never because of there are no return 

// Note : jodi know function know kichu return na kre then tar type ta never hisebe likha jate pare

function throwError( massage: string ): never{
    throw new Error( massage );
}

throwError("Somethig wrong please check previous code");