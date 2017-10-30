import React, { Component } from 'react';
import './App.css';
import Footer from './components/footercomponent/footer';
import pic4 from './Assets/background2.png';
import AboutUs from './components/Aboutus.js';
import Home from './Home.js';
import Header from './Header.js';
import Main from './Main.js';

class App extends Component {
  render() {
    return (
<div>
    <Main />
    <Header />
</div>
    );
  }
}


export default App;
