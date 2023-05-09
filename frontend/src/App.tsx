import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages';
import Choice from './pages/multiplechoice';
import ShortAnswer from "./pages/shortanswer";
import DragDrop from "./pages/dnd";
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