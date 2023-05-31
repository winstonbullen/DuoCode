import { render, screen } from '@testing-library/react';
import React from 'react';
import DragDrop from '../src/pages/dnd';

describe('Drag and Drop component with mock data', () => {
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

    it('should render the parts to be dragged received from the server', async () => {
        const buttonRef = React.createRef<HTMLButtonElement>();
        render(<DragDrop language={"java"} unit={"variables"} difficulty={1} submitRef={buttonRef}
                         updateSolution={function (newValue: string): void {
                             "int foo = 1;"
                         }} 
                         handleAnsweredCorrectly={
                            () => {}
                         }/>);
        await screen.findByText(mockData.correct_ordering[0]);
        await screen.findByText(mockData.correct_ordering[1]);
        await screen.findByText(mockData.correct_ordering[2]);
        await screen.findByText(mockData.correct_ordering[3]);
        await screen.findByText(mockData.correct_ordering[4]);
    });
});