import { FileContentDB } from "../src/filecontentdb.js";

test("file content DB is a singleton", () => {
  let i1 = FileContentDB.get_db();
  let i2 = FileContentDB.get_db();

  expect(i1).toBe(i2);
});

/* 
  These next eight tests specifically test that every subject is accessible
*/

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

test("content db reads the first drag & drop java classes question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "classes",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "classes",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to declare a private class called Test.",
    correct_ordering: ["private", "class", "Test"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java collections question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "collections",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "collections",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to create an ArrayList called myList that stores Strings.",
    correct_ordering: ["ArrayList<String>", "myList", "=", "new", "ArrayList<String>()", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java conditions question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "conditions",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "conditions",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to declare an if statement that tests whether i is less than 0.",
    correct_ordering: ["if", "(", "i", "<", "0", ")"]
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

test("content db reads the first drag & drop java methods question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "methods",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "methods",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to declare a public static method called foo that returns an int and takes a String called bar as its only parameter.",
    correct_ordering: ["public", "static", "int", "foo", "(String bar)"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java operators question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "operators",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "operators",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to set the existing variable named num3 equal to the result of num1 subtract num2.",
    correct_ordering: ["num3", "=", "num1", "-", "num2", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java variables question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: 1,
    prompt: "Drag and drop the following blocks to create a variable named foo of type int and initialize it to 1.",
    correct_ordering: ["int", "foo", "=", "1", ";"]
  };

  expect(q1).toEqual(q2);
});

/* 
  These next two tests specifically test that every difficulty level is accessible
*/

test("content db reads the first drag & drop java variables question of difficulty two", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: "2",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: 2,
    prompt: "Drag and drop the following blocks to create a variable named greeting of type String and initialize it to \"Hello\".",
    correct_ordering: ["String", "greeting", "=", "\"Hello\"", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java variables question of difficulty three", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: "3",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "variables",
    type: "drag_drop",
    difficulty: 3,
    prompt: "Drag and drop the following blocks to create a variable named cost of type double and initialize it to the variable named price.",
    correct_ordering: ["double", "cost", "=", "price", ";"]
  };

  expect(q1).toEqual(q2);
});

/* 
  These next two tests specifically test that every question type is accessible
*/

test("content db reads the first multiple choice java variables question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "variables",
    type: "multiple_choice",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "variables",
    type: "multiple_choice",
    difficulty: 1,
    prompt: "Which of the following creates a variable named foo of type int and initializes it to 1?",
    correct_answer: "int foo = 1;",
    distractors: ["int foo;", "int bar = 1;", "int foo = 100;"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first short response java variables question of difficulty one", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "variables",
    type: "short_response",
    difficulty: "1",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "variables",
    type: "short_response",
    difficulty: 1,
    prompt: "Create a variable named foo of type int and initialize it to 1 using the code box below.",
    correct_answer: "int foo = 1;"
  };

  expect(q1).toEqual(q2);
});

/* 
  These next three tests specifically test that random combinations of all attributes are accessible
*/

test("content db reads the first short response java loops question of difficulty three", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "loops",
    type: "short_response",
    difficulty: "3",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "loops",
    type: "short_response",
    difficulty: 3,
    prompt: "Declare a for-each loop that iterates through every element of int[] nums with the loop variable current using the code box below (do not include any loop body nor curly braces).",
    correct_answer: "for (int current : nums)"
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first drag & drop java operators question of difficulty two", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "operators",
    type: "drag_drop",
    difficulty: "2",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "operators",
    type: "drag_drop",
    difficulty: 2,
    prompt: "Drag and drop the following blocks to set the existing variable named fraction equal to sum divided by total.",
    correct_ordering: ["fraction", "=", "sum", "/", "total", ";"]
  };

  expect(q1).toEqual(q2);
});

test("content db reads the first multiple choice java collections question of difficulty three", async () => {
  let db = FileContentDB.get_db();

  let q1 = await db.get_question({
    language: "java",
    subject: "collections",
    type: "multiple_choice",
    difficulty: "3",
    id: "1"
  });

  let q2 = {
    language: "java",
    subject: "collections",
    type: "multiple_choice",
    difficulty: 3,
    prompt: "Which of the following creates a Queue called line that stores Strings and is implemented with a LinkedList?",
    correct_answer: "Queue<String> line = new LinkedList<String>();",
    distractors: ["LinkedList<String> line = new Queue<String>();", "Queue<> line = new LinkedList<String>();", "LinkedList<> line = new Queue<String>();"]
  };

  expect(q1).toEqual(q2);
});