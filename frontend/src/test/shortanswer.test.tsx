import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ShortAnswer from '../pages/shortanswer';

// Mock the quiz data
jest.mock('../api/quiz', () => ({
    quiz: {
        questions: [
            {
                type: 'short_response',
                prompt: 'Create a variable named foo of type int and initialize it to 1 using the code box below.',
                correct_answer: 'int foo = 1;',
            },
        ],
    },
}));

describe('ShortAnswer', () => {
    it('renders the correct question prompt', () => {
        // render(<ShortAnswer submitRef={} />);
        const question = screen.getByLabelText(
            'Create a variable named foo of type int and initialize it to 1 using the code box below.'
        );
        expect(question).toBeInTheDocument();
    });
});
