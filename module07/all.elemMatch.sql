
/*
    7-6: Explore $all , $elemMatch Operator Part1:
*/
// db.practice.find({ "interests.1": "Travelling"}).project({ interests: 1 })
// db.practice.find({ interests: [ "Reading", "Travelling", "Gaming" ] }).project({ interests: 1 })

// $all
/*
db.practice.find({
    interests: { $all: ["Gaming", "Cooking", "Reading"]}
})
    .project({
        interests: 1
    })*/

/*
// $all equvelent to and

db.practice.find({
    $and: 
    [ 
        {"interests": 'Travelling'},
        {"interests": 'Cooking'},
        {"interests": 'Gaming'}
        ] 
}).project({
    interests: 1
})

*/

/* $elemMatch Operator */
/*
db.practice.find(
    {"skills.name": "JAVASCRIPT"}
).project({
    skills: 1
})
*/
db.practice.find({
    skills: { $elemMatch: { name: "JAVA", level:"Intermidiate"}}
}).project({ skills: 1 })
