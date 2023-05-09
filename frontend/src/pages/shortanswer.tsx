import React, {useEffect, useState} from 'react';
import './shortanswer.css';

interface ShortAnswerProps {
    submitRef : React.RefObject<HTMLButtonElement>;
}

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



const ShortAnswer: React.FC<ShortAnswerProps> = ({submitRef}) => {
    const [shortAnswerData, setshortAnwswer] = useState<shortAnswerData>(emptyShortAnswerData);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/content/java/arrays/short_response/1/1")
            const data = await response.json();
            setshortAnwswer(data)
            console.log(data)
        }
        fetchData();
    }, []);

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
