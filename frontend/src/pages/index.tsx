import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from './question';
import './index.css';
import Milestone from './milestone';

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
        console.log(data)
    }


    /**
     * Fetches user data from the server
     */
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

                {/** TODO: Find a way to show only the selected language's units both on page load and on dropdown selection */}
                {/** TODO: Find a way to list all units programmatically so there are not a ton of repeated code blocks */}

                <div className="middlepane">
                    <div className="unit1-container">
                        <div className="unit1">
                            <h3>Unit 1</h3>
                            <p className="resources"><a href="https://www.w3schools.com/java/java_variables.asp" className="resources-link" target="_blank" rel="noopener noreferrer">Resources</a></p>
                            <p className="variables">Variables</p>
                        </div>
                        <div className="checkpoints">
                            <div className="checkpoint1" onClick={() => handleLessonClick("variables", 1)}
                                style = {completionData.has("java_variables_1") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar"/> 
                            </div>
                            <div className="checkpoint2" onClick={() => handleLessonClick("variables", 2)}
                                style = {completionData.has("java_variables_2") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar" />
                            </div>
                            <div className="checkpoint3" onClick={() => handleLessonClick("variables", 3)}
                                style = {completionData.has("java_variables_3") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar" />
                            </div>
                            <div className="checkpoint4" onClick={() => handleMilestoneClick("variables")}
                                style = {completionData.has("java_variables") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whiteflag.png")} alt="flag" />
                            </div>
                        </div>
                    </div>

                    <div className="unit1-container">
                        <div className="unit1">
                            <h3>Unit 1</h3>
                            <p className="resources"><a href="https://www.w3schools.com/python/python_variables.asp" className="resources-link" target="_blank" rel="noopener noreferrer">Resources</a></p>
                            <p className="variables">Variables</p>
                        </div>
                        <div className="checkpoints">
                            <div className="checkpoint1" onClick={() => handleLessonClick("variables", 1)}
                                style = {completionData.has("python_variables_1") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar"/> 
                            </div>
                            <div className="checkpoint2" onClick={() => handleLessonClick("variables", 2)}
                                style = {completionData.has("python_variables_2") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar" />
                            </div>
                            <div className="checkpoint3" onClick={() => handleLessonClick("variables", 3)}
                                style = {completionData.has("python_variables_3") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whitestar.png")} alt="whitestar" />
                            </div>
                            <div className="checkpoint4" onClick={() => handleMilestoneClick("variables")}
                                style = {completionData.has("python_variables") ? {backgroundColor : '#0ADD08'} : {}}>
                                <img src={require("./images/whiteflag.png")} alt="flag" />
                            </div>
                        </div>
                    </div>
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