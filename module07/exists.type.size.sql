// 7-5: Explore $exists , $type , $size operator

//Exists  
// db.practice.find({ phone: { $exists : false } } )
    
//Type
// db.practice.find({ friends: { $type : 'array' } } )

// Size Operator
db.practice.find({ skills: { $size: 1 }}).project({skills: 1})