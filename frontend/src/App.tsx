import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';


function App() {
    return (
        <Router basename='/app'>
            <Routes>
                <Route path='/' element={<HomePage />} />
                {/* <Route path='/dnd' element={<DragDrop/>} /> */}
                {/* <Route path='/multiplechoice' element={<Choice />} /> */}
                {/* <Route path='/shortanswer' element={<ShortAnswer />} /> */}
                {/* <Route path='/question' element={<Question />} /> */}
            </Routes>
        </Router>
    );
}


export default App;