import React, { useState, useEffect } from 'react';
import './multiplechoice.css';

/**
 * Interface representing the multiple choice data.
 */
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

/**
 * Represents an option for a multiple-choice question.
 */
type Option = {
    text: string;
    isCorrect: boolean;
};


interface MultipleChoiceProps {
    submitRef : React.RefObject<HTMLButtonElement>;
    unit: string
    difficulty: number
}

/**
 * Multiple Choice component.
 * Renders a multiple choice question with multiple options to select.
 */
const MultipleChoice: React.FC<MultipleChoiceProps> = ({submitRef, unit, difficulty}) => {
    /**
     * The currently displayed question.
     */
    const [question, setQuestion] = useState<Question>(emptyQuestion);

    /**
     * The available options for the question.
     */
    const [options, setOptions] = useState<Option[]>([]);

    /**
     * The selected option by the user.
     */
    const [selectedOption, setSelectedOption] = useState<string>('');

    /**
     * Flag indicating whether to show the result.
     */
    const [showResult, setShowResult] = useState<boolean>(false);

    /**
     * Flag indicating whether the selected option is correct.
     */
    const [isCorrect, setIsCorrect] = useState<boolean>(false);

    /**
     * Fetches the data for the multiple-choice question.
     */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/content/java/" + unit + "/multiple_choice/" + difficulty + "/1")
            const data = await response.json();
            console.log(data)
            setQuestion(data)
        }
        fetchData();
    }, []);

    /**
     * Sets the options when new question is loaded.
     */
    useEffect(() => {
        setOptions(getShuffledOptions());
    }, [question]);

    /**
     * Retrieves shuffled options for the current question.
     * @returns Shuffled options.
     */
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

    /**
     * Handles the change event of the option selection.
     * @param event - The change event.
     */
    function handleOptionChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedOption(event.target.value);
    }

    /**
     * Handles the form submission event.
     * @param event - The form submission event.
     */
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setShowResult(true);
        setIsCorrect(selectedOption === question.correct_answer);
    }

    /**
     * Shuffles an array in place using the Fisher-Yates algorithm.
     * @param array - The array to be shuffled.
     */
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
