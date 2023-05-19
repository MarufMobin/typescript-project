// 7-10: Explore $inc , $min , How to explore documents
// use practice
/*

//Incriment a Specific Value 

db.practice.updateOne( 
    {_id : ObjectId("6406ad65fc13ae5a400000c7") },
    {
        $inc: { age: 1 }
    }
)*/

// Rename a Specific Field 
/*
db.practice.updateMany(
    {},
        { $rename: { "favoutiteColor" : "favouriteColor"}}
) 
*/
// Minimum Value are set in a Specific Field 
/*
db.practice.updateMany(
    {},
    {
        $min: { minAge: 18 }
    }
)*/

/*
db.practice.updateOne(
    {
        _id: ObjectId("6406ad65fc13ae5a400000c7")
    }, {
    $set: { minAge: 16 }
}
)
db.practice.find(
    {
        _id: ObjectId("6406ad65fc13ae5a400000c7")
    }
)

// Delte all record minage field  
db.practice.updateMany(
    {},
    { $unset: { minAge: 1 } }
)

*/
