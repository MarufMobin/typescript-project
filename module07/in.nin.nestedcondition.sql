// db.practice.find( { age: { $gt: 18, $lt : 30} } ).project({ age: 1 }) // implicit and 
// db.practice.find( { gender: "Female" , age: { $in: [18, 23 ] } } ) // $in
// db.practice.find( {gender: "Female", age: { $nin:[ 18,49, 39, 30, 33, 32, 42, 100,2,3, 23 , 94]}}) // nin

db.practice.find({
        gender: "Female",
        age: { $nin: [18,22, 94,99, 30] },
        interests: { $in : ['Gaming','Travelling']}
}).project({
    gender: 1,
    age: 1,
    interests: 1
})