import React from 'react';
import Header from './components/Header';
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Description from './components/Description'
import TryNow from './components/TryNow'
import Footer from './components/Footer'
import './style.sass';

function App() {
  return (
    <div className="App">
      <Header/>
      <Section2/>
      <Section3/>
      <Description/>
      <TryNow/>
      <Footer/>
    </div>
  );
}

export default App;
