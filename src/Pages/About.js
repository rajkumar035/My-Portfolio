import React from 'react';
import '../Assets/CSS/About.css';
import profile from '../Assets/Profiles.jpeg';

const About = ({ aboutId }) => {
  return (
    <section id={aboutId} className='About'>
      <img src={profile} alt='Portfolio' />
      <div className='About-Content'>
        <h3>About</h3>
        <h6>
          Hi, Myself Rajkumar D. <br /> I was a 18 years old boy. I finished my
          Diploma in Computer Engineering at PSG Polytechnic College. I was
          specialized in front-end development and having a knowledge in data
          analysis and now working as a web developer.
        </h6>
      </div>
    </section>
  );
};

export default About;
