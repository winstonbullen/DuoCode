import { FileContentDB } from "../src/filecontentdb.js";

test("file content DB is a singleton", () => {
  let i1 = FileContentDB.get_db();
  let i2 = FileContentDB.get_db();

  expect(i1).toBe(i2);
});

test("content db reads the first drag & drop java arrays question of difficulty one", async () => {
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

test("content db reads the first drag & drop java arrays question of difficulty two", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: "2",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: 2,
    prompt: "Drag and drop the following blocks to create an empty 2D int array of size 8x8 called board.",
    correct_ordering: ["int[][]", "board", "=", "new", "int[8][8]", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java arrays question of difficulty three", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: "3",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "arrays",
    type: "drag_drop",
    difficulty: 3,
    prompt: "Drag and drop the following blocks to create a double array of length 4 called readings and initialize it to 2.0, 3.5, 5.0, and 6.5 (in that order).",
    correct_ordering: ["double[]", "readings", "=", "{2.0, 3.5, 5.0, 6.5}", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first multiple choice java arrays question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "arrays",
    type: "multiple_choice",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "arrays",
    type: "multiple_choice",
    difficulty: 1,
    prompt: "Which of the following creates an empty int array of length 8 called myInts?",
    correct_answer: "int[] myInts = new int[8];",
    distractors: ["int[8] myInts = new int[];", "int[] myInts = {};", "int[] myInts = int[8];"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first short response java arrays question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "arrays",
    type: "short_response",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "arrays",
    type: "short_response",
    difficulty: 1,
    prompt: "Create an empty int array of length 8 called myInts using the code box below.",
    correct_answer: "int[] myInts = new int[8];"
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java loops question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "loops",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "loops",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to declare a while loop that executes as long as the variable named sum is less than 80.",
    correct_ordering: ["while", "(", "sum", "<", "80", ")"]
  };

  expect(q1).toEqual(q2);
});