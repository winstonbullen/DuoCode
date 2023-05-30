import { render, screen } from '@testing-library/react';
import React from 'react';
import MultipleChoice from '../src/pages/multiplechoice';

describe('Multiple Choice component with mock data', () => {
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

    it('should render prompt received from the server', async () => {
        const buttonRef = React.createRef<HTMLButtonElement>();
        render(<MultipleChoice language={"java"} solution={"int foo = 1;"} unit={"variables"} difficulty={1} submitRef={buttonRef}
                               updateSolution={function (newValue: string): void {
                                   "int foo = 1;"
                               }} />);
        await screen.findByText(mockData.correct_answer);
        await screen.findByText(mockData.distractors[0]);
        await screen.findByText(mockData.distractors[1]);
        await screen.findByText(mockData.distractors[2]);
    });
});