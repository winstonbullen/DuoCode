import React, { useState, useEffect } from 'react';
import './shortanswer.css';

interface ShortAnswerProps {
    submitRef : React.RefObject<HTMLButtonElement>;
    unit: string
    difficulty: number
}

/**
 * Interface representing the short answer data.
 */
type shortAnswerData = {
    language: string;
    subject: string;
    type: string;
    difficulty: number;
    prompt: string;
    correct_answer: string;
};

const emptyShortAnswerData: shortAnswerData = {
    language: '',
    subject: '',
    type: '',
    difficulty: 0,
    prompt: '',
    correct_answer: '',
};

/**
 * Short Answer component.
 * Renders a short answer component that allows free response.
 */
const ShortAnswer: React.FC<ShortAnswerProps> = ({submitRef, unit, difficulty}) => {
    /**
     * track the short answer data
     */
    const [shortAnswerData, setshortAnwswer] = useState<shortAnswerData>(emptyShortAnswerData);

    /**
     * load in the short answer question data from backend api
     */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/content/java/" + unit + "/short_response/" + difficulty + "/1")
            const data = await response.json();
            setshortAnwswer(data)
            console.log(data)
        }
        fetchData();
    }, []);

    /**
     * tracks text written
     */
    const [text, setText] = useState('');

    /**
     * flag for checking valid answers
     */
    const [isValid, setIsValid] = useState(false);

    /**
     * flag for showing validation
     */
    const [showValidation, setShowValidation] = useState(false);

    /**
     * Validates the answer by checking it with the correct answer
     * @returns boolean - wether answer is correct
     */
    const validateAnswer = () => {
        return text.toLowerCase() === shortAnswerData.correct_answer.toLowerCase();
    };

    /**
     * handles the form submission
     * @param e - submit event
     */
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsValid(validateAnswer());
        setShowValidation(true);
    };

    /**
     * tracks if answer is correct
     */
    const isCorrect = showValidation && isValid;

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
            {showValidation && (
                <div className="result-message">
                    {isCorrect ? (
                        <p className="correct-answer">Correct!</p>
                    ) : (
                        <p className="incorrect-answer">Incorrect.</p>
                    )}
                </div>
            )}
        </div>

    );
};

export default ShortAnswer;
