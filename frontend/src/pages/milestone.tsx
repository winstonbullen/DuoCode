import React, {useEffect, useRef, useState } from 'react';
import CloseBtn from '../components/CloseBtn'
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import Completed from './completed';
import './question.css';

interface MilestoneProps {
    language: string;
    unitName: string;
    onComplete: () => void;
    complete: boolean;
}

const Milestone: React.FC<MilestoneProps> = ({language, unitName, onComplete, complete} : MilestoneProps) => {
    const [currentQ, setCurrentQ] = useState<number>(1);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [solution, setSolution] = useState('No Solution Available');
    const [visibleSolution, setVisibleSolution] = useState('Please submit once to see solution')
    const [showSolution, setshowSolution] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        setVisibleSolution(solution)
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    /**
     * Handle swapping to the next question and on completion of milestone
     * post completion to backend api.
     */
    const handleNextQ = () => {
        if(isCorrect) {
            setshowSolution(false)
            setCurrentQ(currentQ + 1);
            setVisibleSolution('Please submit once to see solution')
            setCurrentProgress(currentProgress + 33.33333);

            if (currentQ === 3) {
                async function fetchData() {
                    const requestOptions = {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({ language : language, subject : unitName})
                    };
                    await fetch('/completion/', requestOptions);
                }

                if (!complete) {
                    fetchData();
                }
                setIsCorrect(false);
            }
            setIsCorrect(false);
        }
    };

    const handleSolutionClick = (): void => {
        setshowSolution(!showSolution)
    };

    const updateSolution = (newSolution: string) => {
        setSolution(newSolution);
    };

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
    useEffect(() => {
        const handleBeforeUnload = (event: any) => {
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                {currentQ === 1 && <ShortAnswer  solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={1} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 2 && <ShortAnswer  solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={2} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 3 && <ShortAnswer  solution={solution} updateSolution={updateSolution} language={language} unit={unitName} difficulty={3} submitRef={submitRef} handleAnsweredCorrectly={handleAnsweredCorrectly} />}
                {currentQ === 4 && <Completed />}
            </div>
            <div className="question-footer">
                <hr className = "fixed-hr"></hr>
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

export default Milestone;