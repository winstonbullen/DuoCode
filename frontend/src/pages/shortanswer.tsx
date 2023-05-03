import React, { useState } from 'react';
import { quiz } from '../api/quiz';

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
            {question && (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="short-answer-input">{question.prompt}</label>
                    <input id="short-answer-input" type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
            )}
            {showValidation && isValid && <div>Correct!</div>}
            {showValidation && !isValid && text !== '' && <div>Incorrect!</div>}
        </div>
    );
};

export default ShortAnswer;