import { ContentDB } from "../src/contentdb.js";

let db: ContentDB;

beforeAll(async () => {
  db = await ContentDB.get_db();
});

afterAll(async () => {
  await ContentDB.close();
});

describe("Content Atlas DB", () => {
  it("is a singleton", async () => {
    let i2 = await ContentDB.get_db();

    expect(db).toBe(i2);
  });

  /*
    These next eight tests specifically test that every subject is accessible
  */

  it("reads the first drag & drop python classes question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "classes",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "classes",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to declare a class called Test.",
      "correct_ordering": ["class", "Test", ":"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python collections question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "collections",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "collections",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to create a set called students and initialize it to \"John\" and \"Jane\" (in that order).",
      "correct_ordering": ["students", "=", "{", "\"John\"", ",", "\"Jane\"", "}"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python conditions question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "conditions",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "conditions",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to declare an if statement that tests whether i is less than 0.",
      "correct_ordering": ["if", "i", "<", "0", ":"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python functions question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "functions",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "functions",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to declare a function called foo that takes bar as its only argument.",
      "correct_ordering": ["def", "foo", "(", "bar", ")", ":"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python lists question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "lists",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "lists",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to create an empty list called empty_list.",
      "correct_ordering": ["empty_list", "=", "[", "]"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python loops question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "loops",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "loops",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to declare a while loop that executes as long as the variable named sum is less than 80.",
      "correct_ordering": ["while", "sum", "<", "80", ":"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python operators question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "operators",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "operators",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to set the variable named num3 equal to the result of num1 subtract num2.",
      "correct_ordering": ["num3", "=", "num1", "-", "num2"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python variables question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "variables",
      type: "drag_drop",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "variables",
      "type": "drag_drop",
      "difficulty": "1",
      "id": "1",
      "prompt": "Drag and drop the following blocks to create a variable named foo and initialize it to 1.",
      "correct_ordering": ["foo", "=", "1"]
    };

    expect(q1).toEqual(q2);
  });

  /*
    These next two tests specifically test that every difficulty level is accessible
  */

  it("reads the first drag & drop python variables question of difficulty two", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "variables",
      type: "drag_drop",
      difficulty: "2",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "variables",
      "type": "drag_drop",
      "difficulty": "2",
      "id": "1",
      "prompt": "Drag and drop the following blocks to create a variable named greeting and initialize it to \"Hello\".",
      "correct_ordering": ["greeting", "=", "\"Hello\""]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python variables question of difficulty three", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "variables",
      type: "drag_drop",
      difficulty: "3",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "variables",
      "type": "drag_drop",
      "difficulty": "3",
      "id": "1",
      "prompt": "Drag and drop the following blocks to create a variable named cost and initialize it to the variable named price.",
      "correct_ordering": ["cost", "=", "price"]
    };

    expect(q1).toEqual(q2);
  });

  /*
    These next two tests specifically test that every question type is accessible
  */

  it("reads the first multiple choice python variables question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "variables",
      type: "multiple_choice",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "variables",
      "type": "multiple_choice",
      "difficulty": "1",
      "id": "1",
      "prompt": "Which of the following creates a variable named foo and initialize it to 1?",
      "correct_answer": "foo = 1",
      "distractors": ["int foo = 1", "bar = 1", "foo == 1"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first short response python variables question of difficulty one", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "variables",
      type: "short_response",
      difficulty: "1",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "variables",
      "type": "short_response",
      "difficulty": "1",
      "id": "1",
      "prompt": "Create a variable named foo and initialize it to 1 using the code box below.",
      "correct_answer": "foo = 1"
    };

    expect(q1).toEqual(q2);
  });

  /*
    These next three tests specifically test that random combinations of all attributes are accessible
  */

  it("reads the first short response python loops question of difficulty three", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "loops",
      type: "short_response",
      difficulty: "3",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "loops",
      "type": "short_response",
      "difficulty": "3",
      "id": "1",
      "prompt": "Declare a for loop with control variable i that starts at 0 and increments by 1 up to 6 (exclusive) using the code box below (do not include any loop body).",
      "correct_answer": "for i in range(6):"
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first drag & drop python operators question of difficulty two", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "operators",
      type: "drag_drop",
      difficulty: "2",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "operators",
      "type": "drag_drop",
      "difficulty": "2",
      "id": "1",
      "prompt": "Drag and drop the following blocks to set the variable named fraction equal to sum divided by total.",
      "correct_ordering": ["fraction", "=", "sum", "/", "total"]
    };

    expect(q1).toEqual(q2);
  });

  it("reads the first multiple choice python collections question of difficulty three", async () => {

    let q1 = await db.get_question({
      language: "python",
      subject: "collections",
      type: "multiple_choice",
      difficulty: "3",
      id: "1"
    });

    let q2 = {
      "language": "python",
      "subject": "collections",
      "type": "multiple_choice",
      "difficulty": "3",
      "id": "1",
      "prompt": "Which of the following creates a dictionary called car with the key \"type\" initialized to the value \"truck\"?",
      "correct_answer": "car = {\"type\": \"truck\"}",
      "distractors": ["car = {type: truck}", "car = {\"type\" = \"truck\"}", "car = [\"type\": \"truck\"]"]
    };

    expect(q1).toEqual(q2);
  });
});