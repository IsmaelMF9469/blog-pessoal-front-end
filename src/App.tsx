import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import { Text } from './components/text/Text';
import ButtonAppBar from './components/Statics/navbar/NavBar';
import { Footer } from './components/Statics/footer/Footer';
import { Home } from './components/paginas/home/Home';
import { About } from './components/paginas/about/About';

function App() {
  const nome = 'Ismael'
  return (
    <Router>
      <ButtonAppBar />
      <Routes>
        <Route path='/' element= { <Home />} />
        <Route path='/home' element= { <Home />} />
        <Route path='/about' element= { <About />} />

      </Routes>
      <Footer />
    </Router>
    );
}

export default App;
