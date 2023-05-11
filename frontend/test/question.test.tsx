import React from 'react';
import { act, render } from '@testing-library/react';
import Question from '../src/pages/question.js'

describe('Question component', () => {
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
    it('should render without error', () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => { render(<Question />) });
        // expect(render(<Question />)).toBeTruthy();
    });
});