import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

/*type Language = 'Java' | 'Python';*/

const HomePage: React.FC = () => {
    /*const [language, setLanguage] = useState<Language>('Java');
    const [dailyChallengeProgress, setDailyChallengeProgress] = useState<number>(70);

    const handleLanguageChange = (selectedLanguage: Language) => {
        setLanguage(selectedLanguage);
    };*/

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
                        <img src={require("./images/learn.png")} alt="learn" /></Link>
                        <p>Learn</p>
                        </li>
                        <li>
                        <Link to="/">
                        <img src={require("./images/shop.png")} alt="shop" /></Link>
                        <p>Shop</p>
                        </li>
                        <li>
                        <Link to="/">
                        <img src={require("./images/profile.png")} alt="profile" /></Link>
                        <p>Profile</p>
                        </li>
                        <li>
                        <Link to="/">
                        <img src={require("./images/more.png")} alt="more" /></Link>
                        <p>More</p>
                        </li>
                    </ul>
                </div>
                <div className="account">
                    <h3><img src={require("./images/account.png")} alt="account" />CoolCoder123</h3>
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
                        <img src={require("./images/whitestar.png")} alt="whitestar" /></Link>
                    </div>
                    <div className="checkpoint2">
                        <Link to='/'>
                        <img src={require("./images/lock.png")} alt="lock" /></Link>
                    </div>
                    <div className="checkpoint3">
                        <Link to='/'>
                        <img src={require("./images/lock.png")} alt="lock" /></Link>
                    </div>
                    <div className="checkpoint4">
                        <Link to='/'>
                        <img src={require("./images/flag.png")} alt="flag" /></Link>
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
                        <img src={require("./images/blackstar.png")} alt="blackstar" /></Link>
                    </div>
                    <div className="checkpoint2">
                        <Link to='/'>
                        <img src={require("./images/lock.png")} alt="lock" /></Link>
                    </div>
                    <div className="checkpoint3">
                        <Link to='/'>
                        <img src={require("./images/lock.png")} alt="lock" /></Link>
                    </div>
                    <div className="checkpoint4">
                        <Link to='/'>
                        <img src={require("./images/flag.png")} alt="flag" /></Link>
                    </div>
                </div>
            </div>
            </div>
            <div className="rightpane">
            <div className="language">
                <img src={require("./images/java.png")} alt="java" />
                <h3 className="language-name">Java</h3>
            </div>
            <div className="daily-challenges">
                <h3>Daily Challenges</h3>
                <h4>Progress</h4>
                <div className="progress-bar">
                    <div>0/3</div>
                    <img src={require("./images/coin.png")} alt="coin" />
                </div>
            </div>
        </div>
    </div>
    );
};

/*
 <div className="home-page-container">
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