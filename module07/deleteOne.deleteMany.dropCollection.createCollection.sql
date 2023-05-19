
// 7-9: Explore deleteOne , deleteMany, dropCollection, createCollection

// Remove Specific Data 
db.practice.remove({ _id: ObjectId('6406ad65fc13ae5a400000c6')})

// Delete One 
db.practice.deleteOne({ _id: ObjectId('6406ad65fc13ae5a400000c6')})

// Delete Manay 
db.practice.deleteMany({})

// Create a new Colllection
/* 
    db.createCollection('test')
*/
db.test.insertOne({name: 'Maruf'})
db.test.find({})
//  Delete All Data in a Collection 
db.test.deleteMany({})

// Delete Collection in a Database 
db.test.drop()

// Delete Database 
db.dropDatabase()
