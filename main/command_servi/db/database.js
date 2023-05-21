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

const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();
    console.log('Disconnected from the database');
  } catch (error) {
    console.error('Error disconnecting from the database:', error);
  }
};



module.exports = {
  connectToDatabase,
  disconnectFromDatabase,
};

connectToDatabase();