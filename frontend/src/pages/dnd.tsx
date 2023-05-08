import React, { useState, useEffect } from 'react';
import data from '../data/variables/drag_drop/d1_1.json';
import './dnd.css';

type DragDrop = {
    language: string;
    subject: string;
    type: string;
    difficulty: number;
    prompt: string;
    correct_ordering: string[];
};

type DragItem = {
    id: string;
    text: string;
};

interface DragDropProps {
    submitRef : React.RefObject<HTMLButtonElement>;
}


const DragDrop: React.FC<DragDropProps> = ({submitRef}) => {
    const [dragDrop, setDragDrop] = useState<DragDrop>(data);
    const [draggingElement, setDraggingElement] = useState<HTMLElement | null>(null);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    useEffect(() => {
        const shuffledOrdering = shuffleArray(dragDrop.correct_ordering);
        setDragDrop({
            ...dragDrop,
            correct_ordering: shuffledOrdering,
        });
    }, []);

    const handleDragStart = (event: React.DragEvent<HTMLElement>, item: DragItem) => {
        setDraggingElement(event.currentTarget);
        event.dataTransfer!.setData('text/plain', item.id);
        event.dataTransfer!.effectAllowed = 'move';
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.dataTransfer!.dropEffect = 'move';
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const itemId = event.dataTransfer!.getData('text/plain');
        const draggableElement = document.getElementById(itemId);
        if (draggableElement && draggingElement) {
            const dropzone = event.currentTarget;
            dropzone.appendChild(draggingElement);
            draggableElement.style.display = 'inline-block';
        }
    };

    const handleSubmit = () => {
        const draggableElements = document.querySelectorAll('.drag-drop-draggable');
        const ordering: string[] = [];
        draggableElements.forEach((element) => ordering.push(element.textContent || ''));
        setShowResult(true);
        setIsCorrect(ordering.join('') === data.correct_ordering.join(''));
    };

    const shuffleArray = (array: string[]) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
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
               </div>
               <button ref={ submitRef } className="" style={{ display: 'none' }} onClick={handleSubmit}>
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

