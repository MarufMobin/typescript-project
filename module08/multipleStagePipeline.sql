// 8-8: Explore powerful Multi Stage Pipeline
// Multiline Pipeline 
db.practice.aggregate([
    { $match: { _id : ObjectId("6406ad65fc13ae5a400000c5")} },
    {
        $facet: {
            // Sub Pipeline 
            "frindsCount": [
                // project Stage 
                {
                    $project: { friendsCount: { $size: "$friends" } }
                }
            ],
            // Sub Pipeline 
            "interestsCount": [
                {
                    // Project Stage 
                    $project: { interestsCount: { $size: "$interests" } }
                }
            ],
            // Sub pipeline 
            "skillsCount": [
                {
                    $project: { skillsCount: { $size: "$skills" } }
                }
            ]
        }
    }
])
