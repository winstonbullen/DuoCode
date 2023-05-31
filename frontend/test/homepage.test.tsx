import { render, screen } from '@testing-library/react';
import React from 'react';
// import App from '../src/App';
import { BrowserRouter } from 'react-router-dom';
import HomePage from 'pages';

describe('Homepage', () => {

    beforeAll(() => {
        global.fetch = jest.fn((endpoint) => {
            if (endpoint === "/completion") {
                return Promise.resolve({
                    json: () => Promise.resolve([]),
                })
            } else if (endpoint === "/userinfo") {
                return Promise.resolve({
                    json: () => Promise.resolve({ user: "testUsername" }),
                })
            }
        }) as jest.Mock;
    });

    it('should render without error', async () => {
        render(<HomePage />, {wrapper: BrowserRouter});
        await screen.findByText("testUsername");
    });
});