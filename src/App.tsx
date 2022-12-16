import React from 'react';
import Login from './pages/Login'
import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage'
import WaitingOrder from './components/WaitingOrder';
import ExistMenu from './components/ExistMenu';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}>
        <Route path='/home' element={<WaitingOrder/>}></Route>
        <Route path='/orderFood' element={<ExistMenu />}></Route>
        <Route path='/user' element={<div>User</div>}></Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes> 
  );
}

export default App;
