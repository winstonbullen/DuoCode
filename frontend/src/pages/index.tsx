import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from './question';
import './index.css';
import Milestone from './milestone';
import GreenStar from 'components/GreenStar';

/**
 * HomePage component.
 * Renders the homepage and sidebar.
 */
const HomePage: React.FC = () => {
    /*const [language, setLanguage] = useState<Language>('Java');
    const [dailyChallengeProgress, setDailyChallengeProgress] = useState<number>(70);

    const handleLanguageChange = (selectedLanguage: Language) => {
        setLanguage(selectedLanguage);
    };*/

    /**
     * The currently active component.
     */
    const [activeComponent, setActiveComponent] = useState('home');

    /**
     * The currently selected unit.
     */
    const [curUnit, setCurUnit] = useState('');

    /**
     * The currently selected difficulty.
     */
    const [curDifficulty, setCurDifficulty] = useState(0);
    const [isExpanded, setExpandState] = useState(false);

    /**
     * User info
     */
    const [username, setUsername] = useState<string>("");

    /**
     * Set of completion data.
     */
    const [completionData, setCompletionData] = useState(new Set());

    /**
     * Handles the click event for the lesson component.
     * @param unitName - The name of the unit.
     * @param difficulty - The difficulty level.
     */
    const handleLessonClick = (unitName : string, difficulty : number) => {
        setCurUnit(unitName);
        setCurDifficulty(difficulty);
        setActiveComponent('question');
    };

    const currentUrl = window.location.href;
    const logOutUrl = currentUrl.replace("/app", "/logout")
    const helpUrl = currentUrl.replace("/app", "/help")

    const handleMilestoneClick = (unitName : string) => {
        setCurUnit(unitName);
        setActiveComponent('milestone');
    };

    /**
     * Handles the reload action updating the completed lessons.
     */
    const handleReload = () => {
        setActiveComponent('home');
        fetchCompletionData();
    }

    /**
     * Fetches completion data from the server.
     */
    async function fetchCompletionData() {
        const response = await fetch("/completion")
        const data = await response.json();
        setCompletionData(new Set(data));
        console.log(data)
    }

    
    async function fetchUsername() {
        try {
            const response = await fetch("/userinfo");
            const userdata = await response.json();
            setUsername(userdata.user);
            console.log(userdata.user);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Fetches completion data on component mount.
     */
    useEffect(() => {
        fetchCompletionData();
        fetchUsername();
    }, []);

    const [selectedOption, setSelectedOption] = useState('Language');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
        {activeComponent === 'home' && 
            <div className="container">
                <nav className={isExpanded ? "sidebar" : "sidebar sidebar-close"}>
                    <header>
                        <h2>DuoCode</h2>
                        <i className="bx bx-chevron-right toggle" onClick={() => setExpandState(!isExpanded)}></i>
                    </header>
                    <div className="user-account">
                        <Link to='/'>
                        <img src={require("./images/account.png")} alt="account" />
                        </Link>
                        <span className="text nav-text">{username}</span>
                    </div>
                    <div className="menu-section">
                        <div className="menu">
                        <ul className="menu-links">
                            <li className="nav-link">
                            <Link to='/'>
                                <img src={require("./images/learn.png")} alt="learn" />
                                <span className="text nav-text">Learn</span>
                            </Link>
                            </li>
                            <li className="nav-link">
                            <Link to={helpUrl} target="_blank" rel="noopener noreferrer">
                                <img src={require("./images/help.png")} alt="help" />
                                <span className="text nav-text">Help</span>
                            </Link>
                            </li>
                        </ul>
                        </div>
                        <div className="bottom-section">
                        <Link to={logOutUrl}>
                            <img src={require("./images/logout.png")} alt="logout" />
                            <span className="text nav-text">Logout</span>
                        </Link>
                        </div>
                    </div>
                </nav>
                <div className="middlepane">
                <div className="unit1-container">
                    <div className="unit1">
                        <h3>Unit 1</h3>
                        <p className="resources">Resources</p>
                        <p className="variables">Variables</p>
                    </div>
                    <div className="checkpoints">
                        <div className="checkpoint1" onClick={() => handleLessonClick("variables", 1)}>
                            {/* FIX THIS TO NOT HARD CODE */}
                            {completionData.has("java_variables_1") ? (
                                <GreenStar/>) : <img src={require("./images/whitestar.png")} alt="whitestar"/> 
                            }
                        </div>
                        <div className="checkpoint2" onClick={() => handleLessonClick("variables", 2)}>
                            <img src={require("./images/whitestar.png")} alt="whitestar" />
                        </div>
                        <div className="checkpoint3" onClick={() => handleLessonClick("variables", 3)}>
                            <img src={require("./images/whitestar.png")} alt="whitestar" />
                        </div>
                        <div className="checkpoint4" onClick={() => handleMilestoneClick("variables")}>
                            <img src={require("./images/whiteflag.png")} alt="flag" />
                        </div>
                    </div>
                </div>
                <div className="unit2-container">
                    <div className="unit2">
                        <h3>Unit 2</h3>
                        <p className="resources">Resources</p>
                        <p className="operators">Operators</p>
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
                <div className={`select-menu${isMenuOpen ? ' active' : ''}`}>
                    <div className="select-btn" onClick={toggleMenu}>
                        <span className="sBtn-text">{selectedOption}</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <ul className="options">
                        <li className="option" onClick={() => handleOptionClick('Java')}>
                            <i className="bx bxl-java"></i>
                            <span className="option-text">Java</span>
                        </li>
                        <li className="option" onClick={() => handleOptionClick('Python')}>
                            <i className="bx bxl-python"></i>
                            <span className="option-text">Python</span>
                        </li>
                        <li className="option" onClick={() => handleOptionClick('C++')}>
                            <i className="bx bxl-c-plus-plus"></i>
                            <span className="option-text">C++</span>
                        </li>
                    </ul>
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

            
        }
        {/* FIX HARD CODE LANGUAGE ONCE IMPLEMENTED */}
        {activeComponent==='question' && <Question unitName={curUnit} difficulty={curDifficulty} onComplete={() => handleReload()} 
            complete={completionData.has("java_" + curUnit + "_" + curDifficulty)}/>}
        {activeComponent==='milestone' && <Milestone unitName={curUnit} onComplete={() => setActiveComponent('home')}
            complete={completionData.has("java_" + curUnit)}/>}
        </>
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