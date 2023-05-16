import { MongoClient, ServerApiVersion, Collection, FindOneAndReplaceOptions } from "mongodb";
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

	private collection?: Collection<UserInfo>;

	static get_db(): UsersDB {
		if (!UsersDB.instance) {
			UsersDB.client.connect();
			UsersDB.instance = new UsersDB();
			UsersDB.instance.collection = UsersDB.client.db("duocode").collection<UserInfo>("Users");
		}
		return UsersDB.instance;
	}

	async insert_entry(info: UserInfo): Promise<UserInfo> {
		const options: FindOneAndReplaceOptions = { projection: { _id: 0}, upsert: true };

		const result = (await this.collection?.findOneAndReplace({ user: info.user }, info, options))?.value as UserInfo;

		// TODO check if this can be null or none, or above type cast fails?
		// if old entry existed it will be returned, else this should be null?
		return result;
	}

	async get_entry(user: string): Promise<UserInfo> {
		const options = { projection: { _id: 0 } };

		// just get and return first one
		// TODO: Type cast might fail?
		const result = await this.collection?.findOne({ user: user }, options) as UserInfo;
		return result;
	}

	async append_completion(user: string, completion: string): Promise<void> {
		await this.collection?.findOneAndUpdate({ user: user }, {$push: {completed: completion}});
	}

	static async close() {
    await UsersDB.client.close();
  }
}