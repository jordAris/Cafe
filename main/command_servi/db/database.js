/* 
const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://jakafane20:Kimjin841@cafe.h4sanu3.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  async function run() {
    try {
      await client.connect();
      const coll = client.db('test').collection('movies');
      const cursor = coll.find();
      await cursor.forEach(console.dir);
    } finally {
      await client.close();
    }
  } 
  
  run().catch(console.dir);
*/
const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://jakafane20:Kimjin841@cafe.h4sanu3.mongodb.net/Cafe?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
};



const CommandSchema = new mongoose.Schema({
    commandId: String,
    tableId: String,
    Items: [{
        itemId: String,
        name: String,
        price: String,
    }] 
})

const Command = mongoose.model('Command', CommandSchema);
  
// Create collection of Model
Command.createCollection().then(function (collection) {
    console.log('Collection is created!');
});
  /* var mongo = require ('mongodb') 
  var MongoClient = require ('mongodb'). MongoClient; 
  var url = "mongodb: // localhost: 27017 / newdb";
  MongoClient.connect (url, function (err, db) {
    if (err) throwerr; 
    console.log ("Base de données connectée!"); 
    Vardbo = db.db ("newdb"); 
    dbo.collection ("étudiants"). insertMany ([{"name": "John", "marks": 90}, {"name": "Tim", "marks": 80}],
    function (err, res) {
      if (err) throwerr; 
      console .log ("Documents insérés");
      db.close ();
    });
  }); */


module.exports = {
  connectToDatabase,
 
};

connectToDatabase();