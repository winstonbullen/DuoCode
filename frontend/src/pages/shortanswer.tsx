import React, { useState } from 'react';
import { quiz } from '../api/quiz';
import './shortanswer.css';

interface ShortAnswerProps {}

const ShortAnswer: React.FC<ShortAnswerProps> = () => {
    const question = quiz.questions.find(q => q.type === 'short_response');
    const [text, setText] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [showValidation, setShowValidation] = useState(false);

    const validateAnswer = () => {
        return text.toLowerCase() === question?.correct_answer?.toLowerCase();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsValid(validateAnswer());
        setShowValidation(true);
    };

    return (
        <div>
            <div className="short-answer-container">
                {question && (
                    <form id="short-answer-form" onSubmit={handleSubmit}>
                        <label htmlFor="short-answer-input" className="short-answer-prompt">{question.prompt}</label>
                        <input id="short-answer-input" type="text" placeholder = "Your code goes here..." value={text}
                               autoComplete="off" onChange={(e) => setText(e.target.value)} className="short-answer-input" />
                        <button type="submit" className="short-answer-button">Submit</button>
                    </form>
                )}
            </div>
            {showValidation && isValid && <div className="short-answer-validation short-answer-correct">Correct!</div>}
            {showValidation && !isValid && text !== '' && <div className="short-answer-validation short-answer-incorrect">Incorrect!</div>}
        </div>
    );
};

export default ShortAnswer;
