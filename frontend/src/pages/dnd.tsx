import React, { useState, useEffect } from 'react';
import './dnd.css';

/**
 * Interface representing the drag and drop data.
 */
type dragDropData = {
    language: string;
    subject: string;
    type: string;
    difficulty: number;
    prompt: string;
    correct_ordering: string[];
};

const emptyDragDrop: dragDropData = {
    language: '',
    subject: '',
    type: '',
    difficulty: 0,
    prompt: '',
    correct_ordering: [],
};

/**
 * Interface representing a draggable item.
 */
type DragItem = {
    id: string;
    text: string;
};

interface DragDropProps {
    submitRef : React.RefObject<HTMLButtonElement>;
    language: string;
    unit: string;
    difficulty: number;
    updateSolution: (newValue: string) => void;
    handleAnsweredCorrectly: () => void;
}

/**
 * Drag and Drop component.
 * Renders a drag and drop interaction with a prompt and draggable items.
 */
const DragDrop: React.FC<DragDropProps> = ({updateSolution, submitRef, language, unit, difficulty, handleAnsweredCorrectly}) => {
    /**
     * State variables for drag and drop functionality.
     */
    const [dragDrop, setDragDrop] = useState<dragDropData>(emptyDragDrop);
    /**
     * The currently dragging element.
     */
    const [draggingElement, setDraggingElement] = useState<HTMLElement | null>(null);
    /**
     * Flag indicating whether to show the result.
     */
    const [showResult, setShowResult] = useState<boolean>(false);
    /**
     * Flag indicating whether the ordering is correct.
     */
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    /**
     * The original ordering of the elements.
     */
    const [originalOrdering, setOriginalOrdering] = useState<string[]>([]);
    /**
     * Flag indicating whether they have dragged an option.
     */
    const [isDropZoneEmpty, setIsDropZoneEmpty] = useState(true);

    /**
     * Fetches the drag and drop question data from backend api.
     */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/content/" + language + "/" + unit + "/drag_drop/" + difficulty + "/1");
            const data = await response.json();
            const shuffledOrdering = shuffleArray(data.correct_ordering);
            setDragDrop({ ...data, correct_ordering: shuffledOrdering });
            setOriginalOrdering(data.correct_ordering);
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Sets the solution when new question is loaded.
     */
    useEffect(() => {
        updateSolution(originalOrdering.join(" "))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [originalOrdering]);

    /**
     * Handles the drag start event for an item.
     * @param event - The drag event.
     * @param item - The item being dragged.
     */
    const handleDragStart = (event: React.DragEvent<HTMLElement>, item: DragItem) => {
        setDraggingElement(event.currentTarget);
        event.dataTransfer!.setData('text/plain', item.id);
        event.dataTransfer!.effectAllowed = 'move';
    };

    /**
     * Handles the drag over event for a target element.
     * @param event - The drag event.
     */
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer!.dropEffect = 'move';
    };

    /**
     * Handles the drop event for a target element.
     * @param event - The drag event.
     */
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const itemId = event.dataTransfer!.getData('text/plain');
        const draggableElement = document.getElementById(itemId);
        if (draggableElement && draggingElement) {
            const dropzone = event.currentTarget;
            dropzone.appendChild(draggingElement);
            draggableElement.style.display = 'inline-block';
        }
        setIsDropZoneEmpty(false);
    };

    /**
     * Handles the form submission.
     */
    const handleSubmit = () => {
        if(isDropZoneEmpty){
            return;
        } else {
            const draggableElements = document.querySelectorAll('.drag-drop-draggable');
            const ordering: string[] = [];
            draggableElements.forEach((element) => ordering.push(element.textContent || ''));

            setShowResult(true);

            if (JSON.stringify(ordering) === JSON.stringify(originalOrdering)) {
                setIsCorrect(true);
                handleAnsweredCorrectly();
            } else {
                setIsCorrect(false);
            }
        }
    };

    /**
     * Shuffles the elements of an array.
     * @param array - The array to be shuffled.
     * @returns The shuffled array.
     */
    const shuffleArray = (array: string[]) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    /**
     * Handles resetting the draggable elements and pulling them out of the drag box.
     */
    const handleRefresh = () => {
        const dragZone = document.querySelector('.drag-drop-dragzone');
        const draggableElements = document.querySelectorAll('.drag-drop-draggable');
        draggableElements.forEach((element) => {
            const draggableElement = element as HTMLElement;
            dragZone?.appendChild(draggableElement);
            draggableElement.style.display = 'inline-block';
        });

        setShowResult(false);
        setIsCorrect(false);
        setIsDropZoneEmpty(true);
    };

    return (
        <div>
            <div className="drag-drop-container">
                <div className="drag-drop-prompt">{dragDrop.prompt}</div>
                <div className="drag-drop-horizontal-container">
                    <div className="drag-drop-dragzone">
                        {dragDrop.correct_ordering.map((item, index) => (
                            <div
                                key={index}
                                className="drag-drop-draggable"
                                id={`drag-${index}`}
                                draggable
                                onDragStart={(event) =>
                                    handleDragStart(event, { id: `drag-${index}`, text: item })
                                }
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className="drag-drop-dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
                        {Array.from({ length: dragDrop.correct_ordering.length }).map((_, index) => (
                            <div key={index} className="drag-drop-placeholder"></div>
                        ))}
                    </div>
                    <button className="refresh-button" onClick={handleRefresh}>
                        Refresh
                    </button>
                </div>

                <button ref={ submitRef } className="" style={{ display: 'none' }} onClick={handleSubmit} disabled={isDropZoneEmpty}>
                    Submit
                </button>
            </div>
            {showResult && (
                <div className="result-message">
                    {isCorrect ? (
                        <p className="correct-answer drag-drop-correct">Correct!</p>
                    ) : (
                        <p className="incorrect-answer drag-drop-incorrect">Incorrect.</p>
                    )}
                </div>
            )}
        </div>

    );
};

export default DragDrop;