// 8-3: Explore $addFields stage

//Add Field Stage 
/*
db.practice.aggregate([
    //add Field Stage
    { $addFields: { salary: 0 } },
    { $project: { salary: 1 }}
])*/

// Add a Random salary in my salary field 

/* db.practice.aggregate([
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
    
    // This stage we will see the Documentation 
    // { $project: { salary: 1 } }, // there are only Salary in this stage 
    // Added a salary Field in a Collection 
    {
        $out: "salarywithpractice"
    }
]) */


// Show all Data in Database  

/*db.practice.aggregate([
    {
        $project: { salary : 1 }
    }
])*/
