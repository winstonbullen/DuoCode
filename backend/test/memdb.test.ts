import { MemDB } from "../src/memdb.js";

test("mem DB is a singleton", () => {
  let i1 = MemDB.get_db();
  let i2 = MemDB.get_db();

  expect(i1).toBe(i2);
});

test("get values back after putting them in", () => {
  const input = { user: "foo", pass_hash: "bar" };

  let db = MemDB.get_db();

  db.insert_entry(input);
  let output = db.get_entry("foo");
  expect(output).toEqual(input);
});

test("values don't change somehow", () => {
  const input = { user: "foo", pass_hash: "bar" };

  let db = MemDB.get_db();

  db.insert_entry(input);
  let output1 = db.get_entry("foo");
  let output2 = db.get_entry("foo");
  let output3 = db.get_entry("foo");
  expect(output1).toEqual(output2);
  expect(output2).toEqual(output3);
});

test("there can only be one of each key", () => {
  const i1 = { user: "foo", pass_hash: "abc" };
  const i2 = { user: "foo", pass_hash: "xyz" }
  const db = MemDB.get_db();

  db.insert_entry(i1);

  const output1 = db.insert_entry(i2);
  const output2 = db.get_entry("foo");

  expect(output1).toEqual(i1);
  expect(output2).toEqual(i2);
});