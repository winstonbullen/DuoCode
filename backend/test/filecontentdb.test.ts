import { FileContentDB } from "../src/filecontentdb.js";

test("file content DB is a singleton", () => {
  let i1 = FileContentDB.get_db();
  let i2 = FileContentDB.get_db();

  expect(i1).toBe(i2);
});

test("content db reads the first drag+drop java arrays question", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to create an empty int array of length 8 called myInts.",
    correct_ordering: ["int[]", "myInts", "=", "new", "int[8]", ";"]
  };

  expect(q1).toEqual(q2);
});