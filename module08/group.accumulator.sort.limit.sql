// 8-5: Explore $group more , accumulator, $sort , $limit

// Using Sum Operator  
db.practice.aggregate([
    // Match Stage
    {
        $match: { age: { $gt: 18 } }
    },
    //Group Stage  
    {
        $group: {
            _id: "$age",
            persons: { $sum: 1 }
        }
    },
    // Project Stage for rename id field 
    {
        $project: {
            _id: 0,
            salary: "$_id",
            persons: 1
        }
    },
    // sort Stage 
    {
        $sort: {
            _id: -1
        }
    },
    // limit Stage 
    {
        $limit: 4
    }
])