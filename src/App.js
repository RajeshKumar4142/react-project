import React from 'react';

import { Footer, Blog, Possibility, Feature, What, Header } from './container';
import { Cta, Brand, Navbar } from './components';
import './App.css';
const App = () => { 
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <What/>
      <Feature/>
      <Possibility/>
      <Blog/>
      <Cta/>
      <Footer/>
    </div>
  )
}
export default App;
