import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import { QuestionContentDB, QuestionParams } from "./db.js";

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

    static get_db(): ContentDB {
        if (!ContentDB.instance) {
            ContentDB.client.connect();
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