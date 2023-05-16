import { MemDB } from "../src/memdb.js";

describe("MemDB in-memory database", () => {
  it("is a singleton", () => {
    let i1 = MemDB.get_db();
    let i2 = MemDB.get_db();

    expect(i1).toBe(i2);
  });

  it("can get values back after putting them in", async () => {
    const input = { user: "foo", pass_hash: "bar" };

    let db = MemDB.get_db();

    await db.insert_entry(input);
    let output = await db.get_entry("foo");
    expect(output).toEqual(input);
  });

  it("has values that don't change between gets", async () => {
    const input = { user: "foo", pass_hash: "bar" };

    let db = MemDB.get_db();

    await db.insert_entry(input);
    let output1 = await db.get_entry("foo");
    let output2 = await db.get_entry("foo");
    let output3 = await db.get_entry("foo");
    expect(output1).toEqual(output2);
    expect(output2).toEqual(output3);
  });

  it("has only one of each key", async () => {
    const i1 = { user: "foo", pass_hash: "abc" };
    const i2 = { user: "foo", pass_hash: "xyz" }
    const db = MemDB.get_db();

    await db.insert_entry(i1);

    const output1 = await db.insert_entry(i2);
    const output2 = await db.get_entry("foo");

    expect(output1).toEqual(i1);
    expect(output2).toEqual(i2);
  });

  it("stores and retrieves a level completion list", async () => {
    const user = { user: "foo", pass_hash: "abc", completed: [] }
    const db = MemDB.get_db();

    db.insert_entry(user);

    db.append_completion("foo", "java_arrays_1");
    db.append_completion("foo", "java_arrays_2");

    const output_completion = (await db.get_entry("foo")).completed;

    expect(output_completion).toBeTruthy();
    expect(output_completion).toEqual(["java_arrays_1", "java_arrays_2"]);
  });

  it("can have an empty completion list", async () => {
    const user = { user: "foo", pass_hash: "abc", completed: [] }
    const db = MemDB.get_db();
    db.insert_entry(user);
    const output_completion = (await db.get_entry("foo")).completed;
    expect(output_completion).toHaveLength(0);
    expect(output_completion).toEqual([]);
  });
});