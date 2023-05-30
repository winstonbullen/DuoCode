import React, { useRef, useState }from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import MultipleChoice from './multiplechoice';
import DragDrop from './dnd';
import Completed from './completed';


interface QuestionProps {
    language: string;
    unitName: string;
    difficulty: number;
    onComplete: () => void;
    complete: boolean;
}

/**
 * Question component.
 * Wraps all the different types of questions.
 */
const Question: React.FC<QuestionProps> = ({language, unitName, difficulty, onComplete, complete} : QuestionProps) => {
    /**
     * The current question number.
     */
    const [currentQ, setCurrentQ] = useState<number>(1);

    /**
     * The current progress of the quiz.
     */
    const [currentProgress, setCurrentProgress] = useState(0);
    const [solution, setSolution] = useState('No Solution Available');
    const [visibleSolution, setVisibleSolution] = useState('Please submit once to see solution')
    const [showSolution, setshowSolution] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    /**
     * Creates ref to handle question submission.
     */
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        setVisibleSolution(solution)
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    /**
     * Handle swapping to the next question and on completion of lesson
     * post completion to backend api.
     */
    const handleNextQ = () => {
        if(isCorrect) {
            setCurrentQ(currentQ + 1);
            setCurrentProgress(currentProgress + 33.33333);
            setVisibleSolution('Please submit once to see solution')
            setshowSolution(false)

            if (currentQ === 3) {
                async function fetchData() {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ language : language, subject : unitName, level : difficulty})
                    };
                    await fetch('/completion/', requestOptions);
                }

                if (!complete) {
                    fetchData();
                } else {
                    console.log("already completed lesson");
                }
                setIsCorrect(false);
            }
            setIsCorrect(false);
        }
    };

    /**
     * Handles whether solution appears after clicking solution button
     */
    const handleSolutionClick = (): void => {
        setshowSolution(!showSolution)
    };

    /**
     * Changes solution to the current question's solution
     */
    const updateSolution = (newSolution: string) => {
        setSolution(newSolution)
    };

    /**
     * Sends prop indicating lesson completion to homepage.
     */
    const handleComplete = () => {
        onComplete();
    }

    /**
     * Handles the completion of the current question.
     */
    const handleAnsweredCorrectly = () => {
        setIsCorrect(true);
    };

    /**
     * Prevents user from accidently going back to menu without finishing the level.
     */
    window.addEventListener('beforeunload', function (event) {
        event.preventDefault();
        event.returnValue = '';
    });

    const handleCloseClick  = () => {
        const confirmDialog = window.confirm('Are you sure you want to exit the level? Your progress will not be saved.');
        if (confirmDialog) {
            handleComplete()
        }
    }

    return (
        <div className='page'>
            <div className='question-header'>
                <button type="submit" className="question-close" onClick={handleCloseClick}>
                    <CloseBtn/>
                </button>

                <div className='mg-sm'>
                    <ProgressBar completed= {currentProgress}/>
                </div>
            </div>
            <div className='question-content'>
                {currentQ === 1 && <MultipleChoice solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={difficulty} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 2 && <DragDrop solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={difficulty} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 3 && <ShortAnswer solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={difficulty} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 4 && <Completed />}
            </div>
            <div className="question-footer">
                    <hr className="fixed-hr"></hr>
                <div className = "button-group">
                    {currentQ !== 4 ? (
                        <button className="question-solution" onClick={handleSolutionClick}>Solution</button>
                    ) : null}
                    {showSolution && (
                        <div className="popup">
                            {visibleSolution}
                        </div>
                    )}
                    {currentQ !== 4 ? (
                        <button type="submit" className="question-submit" onClick={handleSubmitRef}>Submit</button>
                    ) : null}
                    {currentQ !== 4 ? (
                        <button type="submit" className="question-next" onClick={handleNextQ}>Next</button>
                    ) : <button type="submit" className="question-complete" onClick={handleComplete}>Go Back</button>}
                </div>
            </div>
        </div>
    );
};

export default Question;