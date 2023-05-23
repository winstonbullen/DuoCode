import React from 'react';
import { render, screen } from '@testing-library/react';
import DragDrop from '../src/pages/dnd';

describe('ShortAnswer component with mock data', () => {
    const mockData = {
        "language": "java",
        "subject": "variables",
        "type": "drag_drop",
        "difficulty": 1,
        "prompt": "Drag and drop the following blocks to create a variable named foo of type int and initialize it to 1.",
        "correct_ordering": ["int", "foo", "=", "1", ";"]
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
        render(<DragDrop solution={"int foo = 1;"} unit={"variables"} difficulty={1} submitRef={buttonRef}
                         updateSolution={function (newValue: string): void {
                             "int foo = 1;"
                         }} />);

        await screen.findByText(mockData.prompt);
    });
});
