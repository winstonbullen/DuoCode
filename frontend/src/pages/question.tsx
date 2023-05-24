import React, { useRef, useState }from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import MultipleChoice from './multiplechoice';
import DragDrop from './dnd';
import Completed from './completed';


interface QuestionProps {
    unitName: string;
    difficulty: number;
    onComplete: () => void;
    complete: boolean;
}

/**
 * Question component.
 * Wraps all the different types of questions.
 */
const Question: React.FC<QuestionProps> = ({unitName, difficulty, onComplete, complete} : QuestionProps) => {
    /**
     * The current question number.
     */
    const [currentQ, setCurrentQ] = useState<number>(1);
    
    /**
     * The current progress of the quiz.
     */
    const [currentProgress, setCurrentProgress] = useState(0);

    /**
     * Creates ref to handle question submission. 
     */
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    /**
     * Handle swapping to the next question and on completion of lesson
     * post completion to backend api.
     */
    const handleNextQ = () => {
        setCurrentQ(currentQ + 1);
        setCurrentProgress(currentProgress + 33.33333);

        if (currentQ === 3) {
            async function fetchData() {
                const requestOptions = {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    // CHANGE TO LANGUAGE PASSED AS PROP ONCE LANGUAGES ARE IMPLEMENTED
                    body: JSON.stringify({ language : 'java', subject : unitName, level : difficulty})
                };
                const response = await fetch('/completion/', requestOptions);
                console.log(response);
            }
            if (!complete) {
                fetchData();
            } else {
                console.log("already completed lesson");
            }
        } 
    };

    /**
     * Sends prop indicating lesson completion to homepage.
     */
    const handleComplete = () => {
        onComplete();
    }

    return (
        <div className='page'>
            <div className='question-header'>
                <button type="submit" className="question-close" onClick={handleComplete}>
                    <CloseBtn/>
                </button>

                <div className='mg-sm'>
                    <ProgressBar completed= {currentProgress}/>
                </div>
            </div>
            <div className='question-content'>
                {currentQ === 1 && <MultipleChoice unit={unitName} difficulty={difficulty} submitRef={submitRef} />}
                {currentQ === 2 && <DragDrop unit={unitName} difficulty={difficulty} submitRef={submitRef} />}
                {currentQ === 3 && <ShortAnswer unit={unitName} difficulty={difficulty} submitRef={submitRef} />}
                {currentQ === 4 && <Completed />}
            </div>
            <div className="question-footer">
                <hr style={{
                    background: "lightgrey",
                    height: "3px",
                    border: "none",
                }}></hr>
                {currentQ !== 4 ? (
                    <button type="submit" className="question-submit" onClick={handleSubmitRef}>Submit</button>
                    ) : null}
                {currentQ !== 4 ? (
                    <button type="submit" className="question-next" onClick={handleNextQ}>Next</button>
                ) : <button type="submit" className="question-next" onClick={handleComplete}>Go Back</button>}
            </div>
        </div>
    );
};

export default Question;