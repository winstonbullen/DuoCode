import React, { useRef, useState }from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import SettingBtn from '../components/SettingBtn';
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import MultipleChoice from './multiplechoice';
import DragDrop from './dnd';

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
    const [currentQ, setCurrentQ] = useState(1);


    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    // swap question for next one
    const handleNextQ = () => {
        if (currentQ == 3) {
            setCurrentQ(1)
        } else {
            setCurrentQ(currentQ + 1);
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
                    <ProgressBar completed={10}/>
                </div>
            </div>
            <div className='question-content'>
                {currentQ === 1 && <MultipleChoice submitRef={submitRef} />}
                {currentQ === 2 && <DragDrop submitRef={submitRef} />}
                {currentQ === 3 && <ShortAnswer submitRef={submitRef} />}
            </div>
            <div className="question-footer">
                <hr></hr>
                <button type="submit" className="" onClick={handleSubmitRef}>Submit</button>
                <button type="submit" className="" onClick={handleNextQ}>Next</button>
            </div>
        </div>
    );
};

export default Question;