import { MongoClient, ServerApiVersion } from "mongodb";
const uri = "mongodb+srv://duocodedev:<PASSWORD HERE>@cluster0.saszn4a.mongodb.net/?retryWrites=true&w=majority";
import { QuestionParams } from "./db.js";

export class ContentDB {

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    client: any = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async get_question(query: QuestionParams): Promise<Object> {
        try {
            await this.client.connect();

            const db = this.client.db("duocode");
            const collection = db.collection('JavaQuestions');

            const options = { projection: { _id: 0 } };
            const result = await collection.find(query, options);

            for await (const doc of result) {
                return doc;
            }
        } finally {
            await this.client.close();
        }
        return {};
    }
}