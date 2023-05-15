import React, { useState, useEffect } from 'react';
import './multiplechoice.css';

type Question = {
    language: string;
    subject: string;
    type: string;
    difficulty: number;
    prompt: string;
    correct_answer: string;
    distractors: string[];
};

const emptyQuestion: Question = {
    language: "",
    subject: "",
    type: "",
    difficulty: 0,
    prompt: "",
    correct_answer: "",
    distractors: []
};


type Option = {
    text: string;
    isCorrect: boolean;
};

interface MultipleChoiceProps {
    submitRef : React.RefObject<HTMLButtonElement>;
    unit: string
    difficulty: number
}



const MultipleChoice: React.FC<MultipleChoiceProps> = ({submitRef, unit, difficulty}) => {
    const [question, setQuestion] = useState<Question>(emptyQuestion);
    const [options, setOptions] = useState<Option[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/content/java/" + unit + "/multiple_choice/" + difficulty + "/1")
            const data = await response.json();
            console.log(data)
            setQuestion(data)
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setOptions(getShuffledOptions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [question]);

    function getShuffledOptions() {
        const options = [
            { text: question.correct_answer, isCorrect: true },
            ...question.distractors.map((distractor) => ({
                text: distractor,
                isCorrect: false,
            })),
        ];
        shuffleArray(options);
        return options;
    }

    function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setShowResult(true);
        setIsCorrect(selectedOption === question.correct_answer);
    }

    function shuffleArray(array: Option[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <div>
            <div className="multiple-choice-container">
                <form onSubmit={handleSubmit}>
                    <p className="multiple-choice-prompt">{question.prompt}</p>
                    <div className="multiple-choice-options">
                        {options.map((option, index) => (
                            <label key={index} className="multiple-choice-label">
                                <input
                                    type="radio"
                                    value={option.text}
                                    checked={selectedOption === option.text}
                                    onChange={handleOptionChange}
                                />
                                {option.text}
                            </label>
                        ))}
                    </div>
                    <button ref={ submitRef } type="submit" className="" style={{ display: 'none' }}>
                        Submit
                    </button>
                </form>
            </div>
            {showResult && (
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

export default MultipleChoice;
