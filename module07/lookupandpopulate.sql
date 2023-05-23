// 8-9: Explore $lookup operator
/*db.additionalInfo.insertOne({
    userEmail: "dhourstan2p@examiner.com",
    hairColor: "Red",
    eyeColor: "Blue",
    isMarried: true 
})*/

// lookup stage 
/*db.practice.aggregate([
    // Match Stage 
    { $match: { email:"dhourstan2p@examiner.com" } },
    {
        $lookup: {
            from: "additionalInfo",
            localField: "email",
            foreignField: "userEmail",
            as: "data"
        }
    }
])*/

// 8-10: Fix _id $lookup issue , overview of populate methodsx

db.practice.aggregate([
    // Match Stage 
    { $match: { _id:ObjectId("6406ad65fc13ae5a400000c5") } },
    {
        $lookup: {
            from: "additionalInfo",
            localField: "_id",
            foreignField: "userId",
            as: "data"
        }
    }
])
