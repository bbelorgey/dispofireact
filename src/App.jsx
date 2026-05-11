import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DispatchId from './components/DispatchId';
import Footer from './components/Footer';
import './App.css';
import './scss/App.scss';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<DispatchId />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
