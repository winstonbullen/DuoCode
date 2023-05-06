import React, { useState } from 'react';
import data from '../data/variables/multiple_choice/d1_1.json';
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

type Option = {
    text: string;
    isCorrect: boolean;
};

const MultipleChoice = () => {
    const [question, setQuestion] = useState<Question>(data);
    const [options, setOptions] = useState<Option[]>(getShuffledOptions());
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [showResult, setShowResult] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

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

    function shuffleArray(array: Option[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setShowResult(true);
        setIsCorrect(selectedOption === question.correct_answer);
        if (selectedOption !== question.correct_answer) {
            setOptions(getShuffledOptions());
        }
    }

    return (
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
                <button type="submit" className="multiple-choice-button">
                    Submit
                </button>
            </form>
            {showResult && (
                <div className="result-message">
                    {isCorrect ? (
                        <p className="correct-answer short-answer-correct">Correct!</p>
                    ) : (
                        <p className="incorrect-answer short-answer-incorrect">Incorrect.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default MultipleChoice;
