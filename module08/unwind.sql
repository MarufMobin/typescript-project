// 8-7: Explore $unwind 
db.practice.aggregate([
    // Unwind stage 
    {
        $unwind : "$friends"
    },
    // Group Stage 
    {
        $group: {
            _id: "$friends",
            count: { $sum: 1 }
        }
    }
])