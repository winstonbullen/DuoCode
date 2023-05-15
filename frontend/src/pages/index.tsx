import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

type Language = 'Java' | 'Python';

const HomePage: React.FC = () => {
    const [language, setLanguage] = useState<Language>('Java');
    const [dailyChallengeProgress, setDailyChallengeProgress] = useState<number>(70);

    const handleLanguageChange = (selectedLanguage: Language) => {
        setLanguage(selectedLanguage);
    };

    return (
        <div className="container">
            <div className="sidebar">
                <div className="duocode-title">
                    <h2>DuoCode</h2>
                </div>
                <div className="navbar-links">
                    <ul>
                        <li>
                        <Link to="/">
                        <img src="learn.svg" alt="learn" />Learn</Link>
                        </li>
                        <li>
                        <Link to="/">
                        <img src="shop.svg" alt="shop" />Shop</Link>
                        </li>
                        <li>
                        <Link to="/">
                        <img src="profile.svg" alt="profile" />Profile</Link>
                        </li>
                        <li>
                        <Link to="/">
                        <img src="more.svg" alt="more" />More</Link>
                        </li>
                    </ul>
                </div>
                <div className="account">
                    <h3><img src="account.svg" alt="account" />CoolCoder123</h3>
                </div>
            </div>
            <div className="grayline" style={{ background: 'lightgrey', width: '.3vh', marginLeft: '24.7%', height: '100vh' }}>
            </div>
            <div className="middlepane">
            <div className="unit1-container">
                <div className="unit1">
                    <h3>Unit 1</h3>
                    <p className="resources">Resources</p>
                    <p className="variables">Variables</p>
                </div>
                <div className="checkpoints">
                    <div className="checkpoint1">
                        <Link to='/question'>
                        <img src="whitestar.svg" alt="star" /></Link>
                    </div>
                    <div className="checkpoint2">
                        <Link to='/'>
                        <img src="lock.svg" alt="lock" /></Link>
                    </div>
                    <div className="checkpoint3">
                        <Link to='/'>
                        <img src="lock.svg" alt="lock" /></Link>
                    </div>
                    <div className="checkpoint4">
                        <Link to='/'>
                        <img src="flag.svg" alt="flag" /></Link>
                    </div>
                </div>
            </div>
            <div className="unit2-container">
                <div className="unit2">
                    <h3>Unit 2</h3>
                    <p className="resources">Resources</p>
                    <p className="method-headers">Method Headers</p>
                </div>
                <div className="checkpoints">
                    <div className="checkpoint1">
                        <Link to='/'>
                        <img src="blackstar.svg" alt="star" /></Link>
                    </div>
                    <div className="checkpoint2">
                        <Link to='/'>
                        <img src="lock.svg" alt="lock" /></Link>
                    </div>
                    <div className="checkpoint3">
                        <Link to='/'>
                        <img src="lock.svg" alt="lock" /></Link>
                    </div>
                    <div className="checkpoint4">
                        <Link to='/'>
                        <img src="flag.svg" alt="flag" /></Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="rightpane">
            <div className="language">
                <img src="java.svg" alt="java" />
                <h3 className="language-name">Java</h3>
            </div>
            <div className="daily-challenges">
                <h3>Daily Challenges</h3>
                <h4>Progress</h4>
                <div className="progress-bar">
                    <div>1/3</div>
                    <img className="coin-img" src="coin.svg" alt="coin" />
                </div>
            </div>
        </div>
    </div>
    );
};

/*
 <div className="home-page-container">
            <div className="navbar">
                <div className="duocode-title">
                    <h2>DuoCode</h2>
                </div>
                <div className="navbar-links">
                    <Link to="/">Learn</Link>
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
                        <Link to='/question'>1</Link>
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
*/

export default HomePage;