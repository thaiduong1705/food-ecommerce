import mongoose from "mongoose";

const connectString = "mongodb+srv://food:food@cluster0.arxl4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

class SingletonMongoose {
	private static _instance: SingletonMongoose;

	private constructor() {
		this.connect();
	}

	async connect() {
		try {
			if (true) {
				mongoose.set("debug", true);
				mongoose.set("debug", { color: true });
			}

			await mongoose.connect(connectString);
			console.log("Connect to MongoDB successfully PRO");
		} catch (error) {
			console.log("Connect to MongoDB failed", error);
		}
	}

	static getInstance() {
		if (!this._instance) {
			this._instance = new SingletonMongoose();
		}
		return this._instance;
	}
}

export default SingletonMongoose.getInstance();
