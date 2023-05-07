import { QuestionContentDB, QuestionParams } from "./db.js";
import fs from "fs/promises";

export class FileContentDB implements QuestionContentDB {
  private static instance: FileContentDB;

  static get_db(): FileContentDB {
    if (!FileContentDB.instance) {
      FileContentDB.instance = new FileContentDB();
    }
    return FileContentDB.instance;
  }

  async get_question(p: QuestionParams): Promise<Object> {
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