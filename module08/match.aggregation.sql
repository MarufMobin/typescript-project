db.practice.aggregate([
    // Stage Match 
    { $match: { gender: 'Male', age: { $gt: 18 } } },
    // Project Stage
    { $project: { gender: 1, age: 1 } }
])