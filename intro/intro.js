import React from 'react';
import './intro.css';
import bg from '../../assets/portfolio.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
        <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introtext">I am <span className="introName">Neha P J</span><br/>Web Developer</span>
        <p className="intropara">I am learning React js</p>
        <Link><button className="btn">Hire Me</button></Link>
  </div>
        <img src={bg} alt="Portfolio" className="bg"/>

        </section>
    )
}

export default Intro;
