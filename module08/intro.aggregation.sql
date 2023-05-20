-- Aggregate Function
db.cousins.aggregate([
    -- Find out cousins who have an exam
    { $match: { hasExam: { $ne : true }}},
    -- Filter out cousins who have a budget less then or equal to 500
    { $match : { budget: { $gt: 500 }}},
    -- Filter out cousins who are sick 
    { $match : { isSick : { $ne : true }}},
    -- Calculate the total budget of remaining cousins 
    { $group : { _id : null , total_budget : { $sum: "$budget" }}},
    -- Sort the remaining coursins by age in descending or 
    { $sort: { age: -1 }},
    -- Limit the output to the top 2 cousins 
    { $limit : 2 },
])
