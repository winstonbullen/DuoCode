import { QuestionContentDB, QuestionParams } from "./db.js";
import fs from "fs/promises";

export class FileContentDB implements QuestionContentDB {
  static get_db(): FileContentDB {
    return new FileContentDB();
  }

  async get_question(p: QuestionParams): Promise<JSON> {
    let path = `../content/${p.language}/${p.subject}/${p.type}/d${p.difficulty}_${p.id}.json`;
    let data = await fs.readFile(path)
                 .then((res) => res.toString())
                 .catch((err) => {
                    console.error("ERR: Failed to read file " + path + " with " + err);
                    throw new Error("Failed to read from file " + err)
                  });
    return JSON.parse(data);
  }
}