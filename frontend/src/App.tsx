import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Home from './pages';
import Choice from './pages/multiplechoice';
import ShortAnswer from "./pages/shortanswer";
import DragDrop from "./pages/dnd";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dnd' element={<DragDrop/>} />
                <Route path='/multiplechoice' element={<Choice />} />
                <Route path='/shortanswer' element={<ShortAnswer />} />
            </Routes>
        </Router>
    );
}


export default App;