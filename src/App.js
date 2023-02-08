import React from 'react';
import './App.css';
import Home from './components/Home';
import { Routes, Route} from "react-router-dom";
import Employee from './components/Employee';

function App() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Employee' element={<Employee/>} />
        </Routes>
    </div>
  );
}

export default App;