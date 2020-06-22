const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://sebas:tian@cluster0-q67cb.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = client;
