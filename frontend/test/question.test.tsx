import React from 'react';
import { act, render } from '@testing-library/react';
import App from 'App';

    it('should render without error', () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => { render(<App />) });
    });