const mongoose = require('mongoose');

const uri = "mongodb+srv://sebas:sebas@sebas.q67cb.mongodb.net/sebasdb?retryWrites=true&w=majority"
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: true,
}

const data = {}

data.connected = false

data.init = async () => {
	try {
		await mongoose.connect(uri, options);
		console.log('Connected to MongoDB');
	} catch (err) {
		console.log(err.message);
	}
}

data.initIfNotStarted = async () => {
    if (!data.connected) {
        await data.init();
    }
};

data.close = async () => {
    await mongoose.disconnect();
    data.connected = false;
    console.log("Disconnected from MongoDB")
};

module.exports = data;
