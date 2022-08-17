import React from 'react';
import '../Assets/CSS/About.css';
import profile from '../Assets/Profiles2.jpg';

const About = ({ aboutId }) => {
  return (
    <section id={aboutId} className='About'>
      <img src={profile} alt='Portfolio' />
      <div className='About-Content'>
        <h3>About</h3>
        <h6>
          Hi, Myself Rajkumar D, an 18 years old boy. <br />I finished my
          Diploma in Computer Engineering at PSG Polytechnic College. I was
          specialized in front-end development and having a knowledge in data
          analysis & machine learning.
        </h6>
      </div>
    </section>
  );
};

export default About;
