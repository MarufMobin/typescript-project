// 7-8: Explore $unset , $pop , $pull , $pullALL

// Using $unset for delete a field record 

/*
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    {
        $unset: { occupation: "" }
    }
)
*/

//Using pop for delete array last or first value delete for array 
/*
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    { 
        $pop: { languages: 1 }        
    }
)
*/

/*
// Using Pull for delete a Specific value 
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    {
        $pull: { friends: "Tanmoy Parvez"}
    }
)
// PUll All are using multiple value delete in a array 
db.practice.updateOne(
    { _id: ObjectId("6406ad65fc13ae5a400000c6") },
    {
        $pullAll: { interests: ["Gardening", "Travelling", "Writing"]}
    }
)
*/
