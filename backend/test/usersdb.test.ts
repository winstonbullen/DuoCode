import { UsersDB } from "../src/usersdb.js";

let db: UsersDB;

beforeAll(async () => {
  db = await UsersDB.get_db();
});

afterAll(async () => {
  await UsersDB.close();
});

describe("Users Atlas DB", () => {
  it("is a singleton", async () => {
    let i2 = await UsersDB.get_db();

    expect(db).toBe(i2);
  });

  it("can get values back after putting them in", async () => {
    const input = { user: "foo", pass_hash: "bar" };

    await db.insert_entry(input);
    let output = await db.get_entry("foo");
    expect(output).toEqual(input);
  });

  it("has values that don't change between gets", async () => {
    const input = { user: "foo", pass_hash: "bar" };

    await db.insert_entry(input);
    let output1 = await db.get_entry("foo");
    let output2 = await db.get_entry("foo");
    let output3 = await db.get_entry("foo");
    expect(output1).toEqual(output2);
    expect(output2).toEqual(output3);
  });

  it("has only one of each key", async () => {
    const i1 = { user: "foo", pass_hash: "abc" };
    const i2 = { user: "foo", pass_hash: "xyz" };

    await db.insert_entry(i1);

    const output1 = await db.insert_entry(i2);
    const output2 = await db.get_entry("foo");

    expect(output1).toEqual(i1);
    expect(output2).toEqual(i2);
  });
});