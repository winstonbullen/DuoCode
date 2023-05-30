import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JAVA_CONTENT, PYTHON_CONTENT } from './contentlist';

import Question from './question';
import Milestone from './milestone';
import './index.css';

/**
 * HomePage component.
 * Renders the homepage and sidebar.
 */
const HomePage: React.FC = () => {
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
     * Fetches completion data from the server
     */
    async function fetchCompletionData() {
        const response = await fetch("/completion")
        const data = await response.json();
        setCompletionData(new Set(data));
    }

    /**
     * Fetches user data from the server
     */
    async function fetchUsername() {
        try {
            const response = await fetch("/userinfo");
            const userdata = await response.json();
            setUsername(userdata.user);
        } catch (error) {
            console.error(error);
        }
    }

    /**
     * Handles logic for language dropdown
     */
    const [selectedLanguage, setselectedLanguage] = useState('Java'); /* Stores selected language */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setselectedLanguage(option);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    /**
     * create checkpoints
     */
    const createCheckpoints = (unitName : string) => {
        return (<div className="checkpoints">
            <div className="checkpoint1" onClick={() => handleLessonClick(unitName, 1)}
                style = {completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_1") ? {backgroundColor : '#0ADD08'} : {}}>
                <img src={require("./images/whitestar.png")} alt="whitestar"/>
            </div>
            <div className="checkpoint2" onClick={() => handleLessonClick(unitName, 2)}
                style = {completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_2") ? {backgroundColor : '#0ADD08'} : {}}>
                <img src={require("./images/whitestar.png")} alt="whitestar" />
            </div>
            <div className="checkpoint3" onClick={() => handleLessonClick(unitName, 3)}
                style = {completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_3") ? {backgroundColor : '#0ADD08'} : {}}>
                <img src={require("./images/whitestar.png")} alt="whitestar" />
            </div>
            <div className="checkpoint4" onClick={() => handleMilestoneClick(unitName)}
                style = {completionData.has(selectedLanguage.toLowerCase() + "_" + unitName) ? {backgroundColor : '#0ADD08'} : {}}>
                <img src={require("./images/whiteflag.png")} alt="flag" />
            </div>
        </div> );
    }

    // shouldn't these really be their own components?
    /**
     * create unit
     */
    const createUnit = (unitName: string, unitNum: number, link: string) => {
        // each key must be unique, so this works supposing unit names always unique
        return (<div className={`unit1-container`} key={unitName}>
            <div className={`unit1`} style={completionData.has(selectedLanguage.toLowerCase() + "_" + unitName) &&
                completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_1") &&
                completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_2") &&
                completionData.has(selectedLanguage.toLowerCase() + "_" + unitName + "_3") ? 
                {backgroundColor: '#0ADD08'} : {}}>
                <h3>Unit {unitNum}</h3>
                <p className="resources"><a href={link} className="resources-link" target="_blank" rel="noopener noreferrer">Resources</a></p>
                <p className="variables">{unitName}</p>
            </div>
            {createCheckpoints(unitName)}
        </div>);
    }

    /**
     * Fetches completion data on component mount.
     */
    useEffect(() => {
        fetchCompletionData();
        fetchUsername();
    }, []);

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
                {selectedLanguage.toLowerCase() === 'java' ? (
                        // the i + 1 makes unit numbering start at 1
                        JAVA_CONTENT.map((u, i) => createUnit(u.unitName, i + 1, u.resource_link))
                    ) : (
                        PYTHON_CONTENT.map((u, i) => createUnit(u.unitName, i + 1, u.resource_link))
                    )
                }
                </div>
                <div className="rightpane">
                <div className={`select-menu${isMenuOpen ? ' active' : ''}`}>
                    <div className="select-btn" onClick={toggleMenu}>
                        <span className="sBtn-text">{selectedLanguage}</span>
                        <i className="bx bx-chevron-down"></i>
                    </div>
                    <ul className="options">
                        <li className="option" value="Java" onClick={() => handleOptionClick('Java') }>
                            <i className="bx bxl-java"></i>
                            <span className="option-text">Java</span>
                        </li>
                        <li className="option" value="Python" onClick={() => handleOptionClick('Python')}>
                            <i className="bx bxl-python"></i>
                            <span className="option-text">Python</span>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        }

        {activeComponent==='question' && <Question language={selectedLanguage.toLowerCase()} unitName={curUnit} difficulty={curDifficulty} onComplete={() => handleReload()}
            complete={completionData.has(selectedLanguage.toLowerCase() + "_" + curUnit + "_" + curDifficulty)}/>}
        {activeComponent==='milestone' && <Milestone language={selectedLanguage.toLowerCase()} unitName={curUnit} onComplete={() => handleReload()}
            complete={completionData.has(selectedLanguage.toLowerCase() + "_" + curUnit)}/>}
        </>
    );
};

export default HomePage;