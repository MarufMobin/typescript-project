
// 7-4: Explore $and , $or , Implicit vs explicit and

// And operator

// db.practice.find({
//     $and: [
//         { gender: "Female" },
//         { age: { $lt: 30 } },
//         { "skills.name": "JAVASCRIPT" }
//     ]
// }).project({
//     gender: 1,
//     age: 1,
//     "skills.name" : 1
// })

//Or Operator

// db.practice.find({
//     $or: [
//             { "skills.name": "PYTHON" },
//             { "skills.name": "JAVASCRIPT" }
//         ]
// }).project({
//     age: 1,
//     "skills.name" : 1
// })

// db.practice.find({
//     "skills.name" : {$in: ['PYTHON', "JAVASCRIPT"]}
// }).project({"skills.name" : 1})

// Implicite And 
// db.practice.find({age: {$ne: 18}, age: { $gt: 15}}).project({age: 1}).sort({age:1})

// Explicit And 
// Because of there are two field are same 
// db.practice.find({ $and: { age: [15, 18] } }).project({ age: 1 }).sort({ age: 1 })

db.practice.find(
    {
        $and:
            [
                { age: { $ne: 18 } },
                { age: { $gt: 15 } }
            ]
    }).project({ age: 1 }).sort({ age: 1 })