import { render } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

describe('Homepage', () => {
    it('should render without error', () => {
        render(<App />)
    });
});