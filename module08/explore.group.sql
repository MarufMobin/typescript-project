// 8-4: Explore $group

-- Using Marge for not a new Collection it's a already Existing collection 

/*
db.practice.aggregate([
    //add Field Stage
    {
        $addFields: {
            salary: {
                $toInt: {
                    $floor: {
                        $multiply: [{ $rand: {} }, 100]
                    }
                }
            }
        }
    },
    {
        $merge: "practice"
    }
])
*/

// Group by Stage 
/* db.practice.aggregate([
    // Group Stage
    {
        $group: { _id: "$gender" }
    }
]) */
// Multiple Group Property 
/* db.practice.aggregate([
    // Group Stage
    {
        $group: {
            _id:
            {
                age: "$age",
                gender: "$gender"

            }

        }
    }
]) */
