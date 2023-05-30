import { MongoClient, ServerApiVersion, Collection, FindOneAndReplaceOptions } from "mongodb";
import { UserInfo, UserInfoDB } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_INSTANCE as string;

/**
 * Implementation of {@link UserInfoDB} using a remote connection to a MongoDB instance
 * specified by the `MONGODB_INSTANCE` environment variable
 */
export class UsersDB implements UserInfoDB {

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    private static client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    // singleton instance
    private static instance: UsersDB;

    // actual mongo collection
    private collection?: Collection<UserInfo>;

    /**
     * Lazily construct and return a singleton {@link UsersDB} instance
     * @returns A promise of a singleton instance of this class
     */
    static async get_db(): Promise<UsersDB> {
        if (!UsersDB.instance) {
            await UsersDB.client.connect();
            UsersDB.instance = new UsersDB();
            UsersDB.instance.collection = UsersDB.client.db("duocode").collection<UserInfo>("Users");
        }
        return UsersDB.instance;
    }

    async insert_entry(info: UserInfo): Promise<UserInfo> {
        const options: FindOneAndReplaceOptions = { projection: { _id: 0 }, upsert: true };

        const result = (await this.collection?.findOneAndReplace({ user: info.user }, info, options))?.value as UserInfo;

        return result;
    }

    async get_entry(user: string): Promise<UserInfo> {
        const options = { projection: { _id: 0 } };

        const result = await this.collection?.findOne({ user: user }, options) as UserInfo;
        return result;
    }

    async append_completion(user: string, completion: string): Promise<void> {
        await this.collection?.findOneAndUpdate({ user: user }, { $push: { completed: completion } });
    }

    /**
     * Close this database, freeing existing MongoDB connections. Connection freeing may also
     * happen if this isn't called but may be delayed (automatic freeing on the MongoDB side).
     */
    static async close() {
        await UsersDB.client.close();
    }
}