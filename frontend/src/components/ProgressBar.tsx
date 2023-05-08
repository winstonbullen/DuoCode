import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  completed : number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({completed} : ProgressBarProps) => {

  return (
    <div className='container'>
      <div className='progress' style={{width: `${completed}%`}}>
      </div>
    </div>
  );
}

export default ProgressBar;