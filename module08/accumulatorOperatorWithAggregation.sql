// 8-6: Explore Accumulator Operator using aggregation

//Using Multiple Stage same name  
/*db.practice.aggregate([
    // Match Stage 
    { $match: { age: { $gt: 18 } } },
    { $match: { gender: "Male" } },
    // Group Stage 
    {
        $group: {
            _id: "$salary",
            persons: { $sum: 1 } // Accumulator 
        }
    },
    // Project Stage 
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
])*/
/*
db.practice.aggregate([
    // Group Stage 
    {
        $group: {
            _id: null,
            count: { $sum: "$salary" },
            maxSalary: { $max: "$salary" },
            minSalary: { $min: "$salary" },
            avgsalary: { $avg: "$salary" },

            // persons: { $sum: 1 } // Accumulator 
        }
    },
    {
        $project: {
            count: 1,
            maxSalary: 1,
            minSalary: 1,
            avgSalary: 1,
            salaryRange: {
                $subtract: [ "$maxSalary", "$minSalary" ]
            }
        }
    }
])*/