
import React from 'react';

import './App.css';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';
import About from './Component/About';
import Home from './Component/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Component/Main';


const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" component={Main} />
      </Routes>
    </Router>
  )

  }
    

export default App;
