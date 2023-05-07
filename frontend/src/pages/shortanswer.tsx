import React, { useState } from 'react';
import shortAnswerData from '../data/variables/short_response/d1_1.json';
import Question from './question';
import './shortanswer.css';

interface ShortAnswerProps {}

const ShortAnswer: React.FC<ShortAnswerProps> = () => {
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showValidation, setShowValidation] = useState(false);

    const validateAnswer = () => {
        return text.toLowerCase() === shortAnswerData.correct_answer.toLowerCase();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsValid(validateAnswer());
        setShowValidation(true);
    };

    return (
        <div>
            <Question></Question>
            <div className="short-answer-container">
            {shortAnswerData && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="short-answer-input" className="short-answer-prompt">{shortAnswerData.prompt}</label>
                    <input autoComplete="off" placeholder="Type your code here..." id="short-answer-input" type="text" value={text} onChange={(e) => setText(e.target.value)} className="short-answer-input" />
                    <button type="submit" className="short-answer-button">Submit</button>
                </form>
            )}
            </div>
            <div className="line">  </div>
            {showValidation && isValid && <div className="short-answer-validation short-answer-correct">Correct!</div>}
            {showValidation && !isValid && <div className="short-answer-validation short-answer-incorrect">Incorrect!</div>}
        </div>

    );
};

export default ShortAnswer;
