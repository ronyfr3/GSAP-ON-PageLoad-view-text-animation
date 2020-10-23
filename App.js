import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
