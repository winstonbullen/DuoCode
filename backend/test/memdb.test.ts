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