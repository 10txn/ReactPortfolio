import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Adventure1 from './components/Pages/Adventure1';
import Signup from './components/Pages/Signup';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/adventure1' exact Component={Adventure1}/>
        <Route path='/sign-up' exact Component={Signup}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;
