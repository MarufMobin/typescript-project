// 7-7: Explore $set , $addToSet , $push operator
/*

// Added new field in exesting db

db.practice.update(
    { _id: ObjectId("6406ad63fc13ae5a40000064") },
    {
        $set: {
            country: "Bangladesh"
        }
    }
)
*/

// Update field there 
/*
db.practice.update(
    { _id: ObjectId("6406ad63fc13ae5a40000064") },
    {
        $set: {
            interests: "Travelling"
        }
    }
)
*/
// Updated field value there also added only new Value and not replace old values 
/* 
db.practice.update(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") } , {
        $addToSet: {
            interests: { $each: ['Gardenning', 'Watching TV']}
        }
    }) */

//Push Operator

/* 
db.practice.update(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") } , {
        $push: {
            interests: { $each: ['Gardenning', 'Watching TV']}
        }
    }) 
*/
    
