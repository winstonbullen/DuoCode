import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

type Language = 'Java' | 'Python';

const HomePage: React.FC = () => {
    const [language, setLanguage] = useState<Language>('Java');
    const [dailyChallengeProgress, setDailyChallengeProgress] = useState<number>(70);
    const[unit, setUnitState] = useState("");
    const[difficulty, setDiffState] = useState("");

    const handleLanguageChange = (selectedLanguage: Language) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="home-page-container">
            <div className="navbar">
                <div className="duocode-title">
                    <h2>DuoCode</h2>
                </div>
                <div className="navbar-links">
                    <Link to="/" >Learn</Link>
                    <Link to="/">Shop</Link>
                    <Link to="/">Profile</Link>
                    <Link to="/">More</Link>
                </div>
                <div className="user-info">
                    <img src="profile-pic.png" alt="Picture" className="profile-pic" />
                    <p className="username">John Doe</p>
                </div>
            </div>
            <div className="unit-container">
                <div className="unit">
                    <h3>Unit 1</h3>
                    <p>Variables and Resources</p>
                </div>
                <div className="checkpoints">
                    <div className="checkpoint complete">
                        <Link to ="/question" state={{unitName: "variables", difficulty: "1"}}>1</Link>
                    </div>
                    <div className="checkpoint complete">
                        <Link to ="/question" state={{unitName: "variables", difficulty: "2"}}>2</Link>
                    </div>
                    <div className="checkpoint">
                        <span>3</span>
                    </div>
                    <div className="checkpoint">
                        <span>4</span>
                    </div>
                </div>
            </div>
            <div className="unit-container">
                <div className="unit">
                    <h3>Unit 2</h3>
                    <p>Method Headers and Resources</p>
                </div>
                <div className="checkpoints">
                    <div className="checkpoint">
                        <span>1</span>
                    </div>
                    <div className="checkpoint">
                        <span>2</span>
                    </div>
                    <div className="checkpoint">
                        <span>3</span>
                    </div>
                    <div className="checkpoint">
                        <span>4</span>
                    </div>
                </div>
            </div>
            <div className="language-dropdown">
                <select value={language} onChange={(e) => handleLanguageChange(e.target.value as Language)}>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
            </div>
            <div className="daily-challenge">
                <p>Daily Challenge</p>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${dailyChallengeProgress}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;