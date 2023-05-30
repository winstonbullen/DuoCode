import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages';
import './App.css';

function App() {
    return (
        <Router basename='/app'>
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </Router>
    );
}


export default App;