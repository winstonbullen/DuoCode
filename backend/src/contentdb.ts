import { MongoClient, ServerApiVersion } from "mongodb";
import { QuestionContentDB, QuestionParams } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_INSTANCE as string;

/**
 * Implementation of {@link QuestionContentDB} using a remote connection to a MongoDB instance
 * specified by the `MONGODB_INSTANCE` environment variable
 */
export class ContentDB implements QuestionContentDB {

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    private static client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    // singleton instance
    private static instance: ContentDB;

    /**
     * Lazily construct and return singleton {@link ContentDB} instance
     * @returns Promise of singleton instance of this class
     */
    static async get_db(): Promise<ContentDB> {
        if (!ContentDB.instance) {
            await ContentDB.client.connect();
            ContentDB.instance = new ContentDB();
        }
        return ContentDB.instance;
    }

    async get_question(query: QuestionParams): Promise<Object> {
        const db = ContentDB.client.db("duocode");
        const collection = db.collection("Content");

        const options = { projection: { _id: 0 } };

        // just get and return first one
        const result = await collection.findOne(query, options);
        return (result) ? result : {};
    }

    /**
     * Close this database, freeing existing MongoDB connections. Connection freeing may also
     * happen if this isn't called but may be delayed (automatic freeing on the MongoDB side).
     */
    static async close() {
        await ContentDB.client.close();
    }
}