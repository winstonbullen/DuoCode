import { MongoClient, ServerApiVersion } from "mongodb";
import { QuestionContentDB, QuestionParams } from "./db.js";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.MONGODB_INSTANCE as string;

export class ContentDB implements QuestionContentDB {

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    private static client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    private static instance: ContentDB;

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

    static async close() {
        await ContentDB.client.close();
    }
}