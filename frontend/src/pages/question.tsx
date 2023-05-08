import React, { useRef }from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import SettingBtn from '../components/SettingBtn';
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
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
                <ShortAnswer submitRef={submitRef}/>
            </div>
            <div className="question-footer">
                <hr></hr>
                <button type="submit" className="" onClick={handleSubmitRef}>Submit</button>
                <button type="submit" className="">Skip</button>
            </div>
        </div>
    );
};

export default Question;