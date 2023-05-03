export const quiz = {
    questions: [
        {
            language: "java",
            subject: "variables",
            type: "drag_drop",
            difficulty: 1,
            prompt: "Drag and drop the following blocks to create a variable named foo of type int and initialize it to 1.",
            correct_ordering: ["int", "foo", "=", "1", ";"]
        },
        {
            prompt: "What is 2 + 2?",
            correct_answer: "4",
            distractors: ["1", "2", "3"]
        },
        {
            language: "java",
            subject: "variables",
            type: "short_response",
            difficulty: 1,
            prompt: "Create a variable named foo of type int and initialize it to 1 using the code box below.",
            correct_answer: "int foo = 1;"
        }
    ]
}