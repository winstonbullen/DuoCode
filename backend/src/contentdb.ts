import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://duocodedev:<PASSWORD_HERE>@cluster0.saszn4a.mongodb.net/?retryWrites=true&w=majority";
import { QuestionContentDB, QuestionParams } from "./db.js";

export class ContentDB implements QuestionContentDB {

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    private static client: any = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    private static instance: ContentDB;

    static get_db(): ContentDB {
        if (!ContentDB.instance) {
            ContentDB.instance = new ContentDB();
        }
        return ContentDB.instance;
    }

    async get_question(query: QuestionParams): Promise<Object> {
        try {
            await ContentDB.client.connect();

            const db = ContentDB.client.db("duocode");
            const collection = db.collection("Content");

            const options = { projection: { _id: 0 } };
            const result = await collection.find(query, options);

            for await (const doc of result) {
                return doc;
            }
        } finally {
            await ContentDB.client.close();
        }
        return {};
    }
}