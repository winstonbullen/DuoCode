import { MongoClient, ServerApiVersion } from "mongodb";
import { UserInfo, UserInfoDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_INSTANCE as string;

// a quick in-memory database to test if the interface structure will work
export class UsersDB implements UserInfoDB {

	// Create a MongoClient with a MongoClientOptions object to set the Stable API version
	private static client = new MongoClient(uri, {
		serverApi: {
			version: ServerApiVersion.v1,
			strict: true,
			deprecationErrors: true,
		}
	});

	private static instance: UsersDB;

	static get_db(): UsersDB {
		if (!UsersDB.instance) {
			UsersDB.client.connect();
			UsersDB.instance = new UsersDB();
		}
		return UsersDB.instance;
	}

	async insert_entry(info: UserInfo): Promise<UserInfo> {
		const db = UsersDB.client.db("duocode");
        const collection = db.collection("Users");

		const result = await collection.insertOne(info);

		// TODO check if this can be null or none
		return result; // if old entry existed it will be returned, else this should be null?
	}

	async get_entry(user: string): Promise<UserInfo> {
		const db = UsersDB.client.db("duocode");
        const collection = db.collection("Users");
		
		const options = { projection: { _id: 0 } };

        // just get and return first one
        const result = await collection.findOne({ username: user }, options);
        return result; // TODO: Type check fails
	}

	append_completion(user: string, completion: string): void {
		// TODO if this question mark is anything like rust this can throw an error
		// but it should be an invariant that every entry has an empty completed list
		
	}

	static async close() {
        await UsersDB.client.close();
    }
}