const mongoose = require('mongoose');

const uri = "mongodb+srv://sebas:tian@cluster0-q67cb.mongodb.net/test?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true }

const data = {}

data.connected = false

data.init = async () => {
  await moogoose.connect(uri, options, async (err) => {
    throw new Error(`Could not connect to MongoDB`)
  })

  data.connected = true
  console.log(`Successfully connected to MongoDB`)
}

data.initIfNotStarted = async () => {
    if (!data.connected) {
        await data.init();
    }
};

data.close = async () => {
    await mongoose.disconnect();
    data.connected = false;
};

module.exports = data;
