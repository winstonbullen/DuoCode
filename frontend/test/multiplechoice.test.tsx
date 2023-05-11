import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MultipleChoice from '../src/pages/multiplechoice.js';

describe('ShortAnswer component with mock data', () => {
    const mockData = {
        "language": "java",
        "subject": "variables",
        "type": "multiple_choice",
        "difficulty": 1,
        "prompt": "Which of the following creates a variable named foo of type int and initialize it to 1?",
        "correct_answer": "int foo = 1;",
        "distractors": ["int foo;", "int bar = 1;", "int foo = 100;"]
    };

    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: () => Promise.resolve(mockData),
        } as Response);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });



    it('should render the prompt received from the server', async () => {
        const buttonRef = React.createRef<HTMLButtonElement>();
        render(<MultipleChoice submitRef={buttonRef} />);

        await screen.findByText(mockData.prompt);
    });
});
