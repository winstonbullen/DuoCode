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
}



const Question: React.FC<QuestionProps> = ({unitName, difficulty, onComplete} : QuestionProps) => {
    const [currentQ, setCurrentQ] = useState<number>(1);
    const [currentProgress, setCurrentProgress] = useState(0);
    console.log(unitName);

    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    // swap question for next one
    const handleNextQ = () => {
        if (currentQ === 4) {
            setCurrentQ(1)
            setCurrentProgress(0);
        } else {
            setCurrentQ(currentQ + 1);
            setCurrentProgress(currentProgress + 33.33333);
        }
    };


    const handleComplete = () => {
        async function fetchData() {
            const requestOptions = {
                method: 'POST',
                headers: {},
                // CHANGE TO LANGUAGE PASSED AS PROP ONCE LANGUAGES ARE IMPLEMENTED
                body: JSON.stringify({ language : 'java', subject : unitName, level : difficulty})
            };
            const response = await fetch('https://reqres.in/api/posts', requestOptions);
            console.log(response);
        }
        fetchData();
        
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