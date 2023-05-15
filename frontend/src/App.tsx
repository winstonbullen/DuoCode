import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Question from "./pages/question";


function App() {
    return (
        <Router basename='/app'>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/dnd' element={<DragDrop/>} /> */}
                {/* <Route path='/multiplechoice' element={<Choice />} /> */}
                {/* <Route path='/shortanswer' element={<ShortAnswer />} /> */}
                <Route path='/question' element={<Question />} />
            </Routes>
        </Router>
    );
}


export default App;