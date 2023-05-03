import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ShortAnswer from '../pages/shortanswer';
import Multiplechoice from "../pages/multiplechoice";

// Mock the quiz data
jest.mock('../api/quiz', () => ({
    quiz: {
        questions: [
            {
                type: 'short_response',
                prompt: 'Create a variable named foo of type int and initialize it to 1 using the code box below.',
                correct_answer: 'int foo = 1;',
            },
            {
                prompt: "What is 2 + 2?",
                correct_answer: "4",
                distractors: ["1", "2", "3"]
            }
        ],
    },
}));

describe('ShortAnswer', () => {
    it('renders the correct question prompt', () => {
        render(<ShortAnswer />);
        const question = screen.getByLabelText(
            'Create a variable named foo of type int and initialize it to 1 using the code box below.'
        );
        expect(question).toBeInTheDocument();
    });
    describe('MultipleChoice', () => {
        it('renders the correct question prompt', () => {
            render(<Multiplechoice/>);
            const question = screen.getByLabelText(
                'What is 2 + 2?'
            );
            expect(question).toBeInTheDocument();
        });
    })
});
