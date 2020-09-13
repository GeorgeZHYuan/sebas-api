const mongoose = require('mongoose');

const uri = "mongodb://<admin123>:<admin123>@ds253398.mlab.com:53398/sebas-db";
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
