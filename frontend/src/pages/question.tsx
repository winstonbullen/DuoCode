import React, { useRef, useState }from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import SettingBtn from '../components/SettingBtn';
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import MultipleChoice from './multiplechoice';
import DragDrop from './dnd';
import Completed from './completed';

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
    const [currentQ, setCurrentQ] = useState(1);
    const [currentProgress, setCurrentProgress] = useState(0);


    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    // swap question for next one
    const handleNextQ = () => {
        if (currentQ == 4) {
            setCurrentQ(1)
            setCurrentProgress(0);
        } else {
            setCurrentQ(currentQ + 1);
            setCurrentProgress(currentProgress + 33.33333);
        }
    };



    return (
        <div className='page'>
            <div className='question-header'>
                <CloseBtn/>
                <div className='mg-sm'>
                    <SettingBtn/>
                </div>
                <div className='mg-sm'>
                    <ProgressBar completed= {currentProgress}/>
                </div>
            </div>
            <div className='question-content'>
                {currentQ === 1 && <MultipleChoice submitRef={submitRef} />}
                {currentQ === 2 && <DragDrop submitRef={submitRef} />}
                {currentQ === 3 && <ShortAnswer submitRef={submitRef} />}
                {currentQ === 4 && <Completed />}
            </div>
            <div className="question-footer">
                <hr style={{
                    background: "lightgrey",
                    height: "3px",
                    border: "none",
                }}></hr>
                {currentQ != 4 ? (
                    <button type="submit" className="question-submit" onClick={handleSubmitRef}>Submit</button>
                    ) : null}
                {currentQ != 4 ? (
                    <button type="submit" className="question-next" onClick={handleNextQ}>Next</button>
                ) : <button type="submit" className="question-next" onClick={handleNextQ}>Reset</button>}
            </div>
        </div>
    );
};

export default Question;