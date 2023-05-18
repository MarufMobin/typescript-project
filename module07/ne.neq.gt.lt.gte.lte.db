/* 
    db.practice.find({})
   .projection({})
   .sort({_id:-1})
   .limit(1)
*/
// db.practice.find({ favoutiteColor: {$eq : "Blue" }} , {favoutiteColor : 1} )
// db.practice.find({ gender: { $ne : "Female" } }, {gender : 1 , name: 1 })
// db.practice.find({ age: { $gt : 30 }}).project({ age: 1 })
// db.practice.find({ age: { $lte : 30 }}).project({ age: 1 })
// db.practice.find({ age: { $lte : 30 }}).project({ age: 1 }).sort({age: 1})
db.practice.find({ age: { $lte : 30 }}).project({ age: 1 }).sort({age: -1})
