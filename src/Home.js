import React, { Component } from 'react';
import './App.css';
import Footer from './components/footercomponent/footer';
import pic4 from './Assets/background2.png';
import AboutUs from './components/Aboutus.js';
import axios from 'axios';
import SignIn from './components/SignIn';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (

<div className="App">

    <div className="Homepic">
      <img src={pic4} className="BigHouse" alt="pic4" width="100%"/>
      <p className="entry">Enter Site >> </p>
    </div>

    <AboutUs />

    <form>
      <label>Name: <input type="text" name="name" /></label>
      <label>Favorite T:<input type="text" name="team" /></label>
      <input type="submit" value="Submit" />
    </form>

    <Link to='/SignIn'>SignIn</Link>

    <Footer />
</div>


    );
  }
}


export default Home;
