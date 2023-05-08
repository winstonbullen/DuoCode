import React, { useState } from 'react';
import shortAnswerData from '../data/variables/short_response/d1_1.json';
import './shortanswer.css';

interface ShortAnswerProps {
    submitRef : React.RefObject<HTMLButtonElement>;
}

const fetchData = () => {
    return fetch("http://localhost:3000/content/java/arrays/short_response/1/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Could not fetch data', error));
}

const ShortAnswer: React.FC<ShortAnswerProps> = ({submitRef}) => {
    fetchData();
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
            <div className="short-answer-container">
            {shortAnswerData && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="short-answer-input" className="short-answer-prompt">{shortAnswerData.prompt}</label>
                    <input autoComplete="off" placeholder="Type your code here..." id="short-answer-input" type="text" value={text} onChange={(e) => setText(e.target.value)} className="short-answer-input" />
                    <button ref={ submitRef } type="submit" style={{ display: 'none' }}>Submit</button>
                </form>
            )}
            </div>
            {showValidation && isValid && <div className="short-answer-validation short-answer-correct">Correct!</div>}
            {showValidation && !isValid && <div className="short-answer-validation short-answer-incorrect">Incorrect!</div>}
        </div>

    );
};

export default ShortAnswer;
