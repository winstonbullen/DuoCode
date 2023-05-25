import React from 'react';
import './completed.css';

/**
 * Component for displaying completion message.
 */
const completed: React.FC = () => {
    return (
        <div className="complete-container">
            <h1 className='complete-prompt'>Level Complete!</h1>
            <p className='complete-prompt'>Congratulations, you have completed the level!</p>
        </div>
    );
};

export default completed