import React from 'react';
import { render } from '@testing-library/react';
import Question from '../pages/question'

describe('Question component', () => {
    it('should render without error', () => {
        render(<Question />);
    });
});