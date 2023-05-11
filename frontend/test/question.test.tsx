import React from 'react';
import { render } from '@testing-library/react';
import Question from '../src/pages/question'

describe('Question component', () => {
    it('should render without error', () => {
        render(<Question />);
    });
});