const mongoose = require('mongoose');

// TODO: Move to untracked config file later.
const uri = "mongodb+srv://sebas:sebas@sebas.q67cb.mongodb.net/sebasdb?retryWrites=true&w=majority"
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
}

const db = {}

db.connected = false

db.init = async () => {
	try {
		await mongoose.connect(uri, options);
		console.log('Connected to MongoDB');
	} catch (err) {
		console.log(err.message);
	}
}

// UNUSED
db.initIfNotStarted = async () => {
    if (!data.connected) {
        await data.init();
    }
};

// UNUSED
db.close = async () => {
    await mongoose.disconnect();
    data.connected = false;
    console.log("Disconnected from MongoDB")
};

module.exports = db
