import React from 'react';
import './App.css';
import Home from './components/Home';
import Edit from './components/Edit';
import Create from './components/Create';
import { Routes, Route} from "react-router-dom";
import Employee from './components/Employee';

function App() {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Edit' element={<Edit/>} />
           <Route path='/create' element={<Create/>} />
        </Routes>
    </div>
  );
}

export default App;