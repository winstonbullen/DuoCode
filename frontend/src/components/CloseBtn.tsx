import React from 'react';
import '../pages/question.css';

interface CloseBtnProps {}
const CloseBtn: React.FC<CloseBtnProps> = () => {
    return (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" fill="white"/>
            <path d="M37.5 12.5L12.5 37.5" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 12.5L37.5 37.5" stroke="#D9D9D9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}

export default CloseBtn;