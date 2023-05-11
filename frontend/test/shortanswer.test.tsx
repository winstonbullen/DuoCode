import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ShortAnswer from '../src/pages/shortanswer.js';

describe('ShortAnswer component with mock data', () => {
    const mockData = {
        language: 'java',
        subject: 'variables',
        type: 'short_response',
        difficulty: 1,
        prompt: 'Create a variable named foo of type int and initialize it to 1 using the code box below.',
        correct_answer: 'int foo = 1;',
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
        render(<ShortAnswer submitRef={buttonRef} />);

        await screen.findByText(mockData.prompt);
    });
});
