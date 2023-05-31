import React, { useState, useEffect } from 'react';
import './shortanswer.css';

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

interface ShortAnswerProps {
    submitRef : React.RefObject<HTMLButtonElement>;
    language: string;
    unit: string;
    difficulty: number;
    updateSolution: (newValue: string) => void;
    handleAnsweredCorrectly: () => void;
}

/**
 * Short Answer component.
 * Renders a short answer component that allows free response.
 */
const ShortAnswer: React.FC<ShortAnswerProps> = ({updateSolution, submitRef, language, unit, difficulty, handleAnsweredCorrectly}) => {
    /**
     * Tracks the short answer data.
     */
    const [shortAnswerData, setshortAnswer] = useState<shortAnswerData>(emptyShortAnswerData);
    /**
     * Tracks text written.
     */
    const [text, setText] = useState('');
    /**
     * Flag for checking valid answers.
     */
    const [isValid, setIsValid] = useState(false);
    /**
     * Flag for showing validation.
     */
    const [showValidation, setShowValidation] = useState(false);
    /**
     * Tracks if answer is correct.
     */
    const isCorrect = showValidation && isValid;

    /**
     * Fetches the short answer question data from backend api.
     */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/content/" + language + "/" + unit + "/short_response/" + difficulty + "/1")
            const data = await response.json();
            setshortAnswer(data)
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /**
     * Sets the solution when new question is loaded.
     */
    useEffect(() => {
        updateSolution(shortAnswerData.correct_answer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shortAnswerData]);

    /**
     * Validates the answer by checking it with the correct answer.
     * @returns boolean - whether answer is correct.
     */
    const validateAnswer = () => {
        return text.toLowerCase() === shortAnswerData.correct_answer.toLowerCase();
    };

    /**
     * Handles the form submission event.
     * @param event - The form submission event.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(validateAnswer()) {
            handleAnsweredCorrectly();
        }
        setIsValid(validateAnswer());
        setShowValidation(true);
    };

    return (
        <div>
            <div className="short-answer-container">
                {shortAnswerData && (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="short-answer-input" className="short-answer-prompt">{shortAnswerData.prompt}</label>
                        <br></br>
                        <input autoComplete="off" placeholder="Type your code here..." id="short-answer-input" type="text" value={text} onChange={(e) => setText(e.target.value)} className="short-answer-input" />
                        <div className="formatting-prompt">Please be sure to follow the <a id="format-tip" href="/help#short-response-format" target="_blank" rel="noopener noreferrer">formatting guide</a>.</div>
                        <button ref={submitRef} type="submit" style={{ display: 'none' }} disabled={!text}>Submit</button>
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