import { UserInfo, UserInfoDB } from "./db.js";

// a quick in-memory database to test if the interface structure will work
export class MemDB implements UserInfoDB {
  private static instance: MemDB;

  private db: Record<string, UserInfo>;

  private constructor() {
    this.db = {};
  }

  static get_db(): MemDB {
    // singleton pattern, and lazy, don't construct until needed
    if (!MemDB.instance) {
      MemDB.instance = new MemDB();
    }
    return MemDB.instance;
  }

  async insert_entry(info: UserInfo): Promise<UserInfo> {
    let entry_exists = this.db[info.user];

    this.db[info.user] = info;

    // TODO check if this can be null or none
    return entry_exists; // if old entry existed it will be returned, else this should be null?
  }

  async get_entry(user: string): Promise<UserInfo> {
    return this.db[user];
  }

  append_completion(user: string, completion: string): void {
    // TODO if this question mark is anything like rust this can throw an error
    // but it should be an invariant that every entry has an empty completed list
    this.db[user].completed?.push(completion);
  }
}