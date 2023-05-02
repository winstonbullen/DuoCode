# Content Formatting

## Languages

Every supported programming language has its own sub-directory within this directory.

## Categories

There are nine exercise categories per language. These vary slightly between languages. The nine categories for Java are as follows:

1. Variables

2. Operators

3. Conditions

4. Loops

5. Arrays

6. Methods

7. Classes

8. Collections

9. File I/O

These categories have their own sub-directories within the language directories.

## Question Types

There are three questions types:

- **Drag & Drop**: The user is presented with a prompt and a certain number of code blocks. They are supposed to drag and drop the code blocks into the correct order according to the prompt.

- **Multiple Choice:** The user is presented with a prompt and a certain number of answer choices. They are supposed to select the correct choice according to the prompt.

- **Short Response**: The user is presented with a prompt and an empty code box. They are supposed to type the correct code into the box according to the prompt.

These three question types have their own sub-directories within the language categories sub-directories. These are respectively ```drag_drop```, ```multiple_choice```, and ```short_response```.

## Question Filenames

Each question is contained within a single ```.json``` file. These files are named with the following convention:

- ```dx_y.json``` where ```x``` is the difficulty level (1-3) and ```y``` is that question's id relative to its difficulty level. 

For example, two questions both of difficulty 1 would be represented the following way:

- ```d1_1.json```: The first question of difficulty 1.

- ```d1_2.json```: The second question of difficulty 1.

## Question Formats

Each question is contained within a single ```.json``` file. The structure of the data within these files is as follows:

Drag & Drop

```
{
    "language": "<language text here>",
    "subject": "<subject text here>",
    "type": "drag_drop",
    "difficulty": <difficulty integer here (1-3)>,
    "prompt": "<prompt text here>",
    "correct_ordering": ["<block 1 text here>", "<block 2 text here>", ...]
}
```

Multiple Choice

```
{
    "language": "<language text here>",
    "subject": "<subject text here>",
    "type": "multiple_choice",
    "difficulty": <difficulty integer here (1-3)>,
    "prompt": "<prompt text here>",
    "correct_answer": "<answer text here>",
    "distractors": ["<distractor 1 text here>", "<distractor 2 text here>", ..."]
}
```

Short Response

```
{
    "language": "<language text here>",
    "subject": "<subject text here>",
    "type": "short_response",
    "difficulty": <difficulty integer here (1-3)>,
    "prompt": "<prompt text here>",
    "correct_answer": "<answer text here>"
}
```
