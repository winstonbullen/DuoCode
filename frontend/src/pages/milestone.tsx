import React, { useRef, useState }from 'react';
import './question.css';
import CloseBtn from '../components/CloseBtn'
import ProgressBar from '../components/ProgressBar';
import ShortAnswer from './shortanswer';
import Completed from './completed';


interface MilestoneProps {
    unitName: string;
    onComplete: () => void;
}



const Milestone: React.FC<MilestoneProps> = ({unitName, onComplete} : MilestoneProps) => {
    const [currentQ, setCurrentQ] = useState<number>(1);
    const [currentProgress, setCurrentProgress] = useState(0);
    console.log(unitName);

    // create ref to submit question-content
    const submitRef = useRef<HTMLButtonElement>(null);
    const handleSubmitRef = () => {
        if (submitRef.current) {
            submitRef.current.click()
        }
    };

    // swap question for next one
    const handleNextQ = () => {
        if (currentQ === 4) {
            setCurrentQ(1)
            setCurrentProgress(0);
        } else {
            setCurrentQ(currentQ + 1);
            setCurrentProgress(currentProgress + 33.33333);
        }
    };

    const handleSolutionClick = (): void => {
        window.alert("This is an alert message!");
    };

    const handleComplete = () => {
        onComplete();
    }

    return (
        <div className='page'>
            <div className='question-header'>
                <button type="submit" className="question-close" onClick={handleComplete}>
                    <CloseBtn/>
                </button>

                <div className='mg-sm'>
                    <ProgressBar completed= {currentProgress}/>
                </div>
            </div>
            <div className='question-content'>
                {currentQ === 1 && <ShortAnswer unit={unitName} difficulty={1} submitRef={submitRef} />}
                {currentQ === 2 && <ShortAnswer unit={unitName} difficulty={2} submitRef={submitRef} />}
                {currentQ === 3 && <ShortAnswer unit={unitName} difficulty={3} submitRef={submitRef} />}
                {currentQ === 4 && <Completed />}
            </div>
            <div className="question-footer">
                <hr style={{
                    background: "lightgrey",
                    height: "3px",
                    border: "none",
                }}></hr>
                <div className = "button-group">
                    {currentQ !== 4 ? (
                        <button className="question-solution" onClick={handleSolutionClick}>Solution</button>
                    ) : null}
                    {currentQ !== 4 ? (
                        <button type="submit" className="question-submit" onClick={handleSubmitRef}>Submit</button>
                    ) : null}
                    {currentQ !== 4 ? (
                        <button type="submit" className="question-next" onClick={handleNextQ}>Next</button>
                    ) : <button type="submit" className="question-next" onClick={handleComplete}>Go Back</button>}
                </div>
            </div>
        </div>
    );
};

export default Milestone;