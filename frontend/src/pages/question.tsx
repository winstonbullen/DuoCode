import React from 'react';
import './question.css';

import CloseBtn from '../components/CloseBtn'
import SettingBtn from '../components/SettingBtn';
import ProgressBar from '../components/ProgressBar';

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
    return (
        <>
        <div className='question-header'>
            <div className='btn'>
                <CloseBtn/>
            </div>
            <div className='btn'>
                <SettingBtn/>
            </div>
            <div className='btn'>
                <ProgressBar completed={20}/>
            </div>

        </div>
        </>
    );
};

export default Question;