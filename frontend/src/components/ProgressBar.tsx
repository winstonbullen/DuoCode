import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  completed : number;
}

/**
 * Progress Bar component.
 * Renders a progress bar that tracks progression in a lesson.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({completed} : ProgressBarProps) => {
  return (
    <div className='progress-container'>
      <div className='progress' style={{width: `${completed}%`}}>
      </div>
    </div>
  );
}

export default ProgressBar;