import React from 'react';
import '../Assets/CSS/Specializationview.css';
import Specialization from '../Components/Specialization';
import img1 from '../Assets/pro1.svg';
import img2 from '../Assets/pro2.png';
import img3 from '../Assets/pro3.png';

function SpecializationView({ specId }) {
  return (
    <section id={specId}>
      <div className='Fixed-bground'>
        <p>Area of Specialization</p>
      </div>
      <div className='Fixed-area'>
        <Specialization
          specID='spec1'
          Header='Front-End Development'
          subHeader='Students Portal'
          Content='React JS, CSS, JavaScript, HTML, Figma'
          reason='I developed this as my final year project in my college. This portal is used for students to manage their academic performances'
          Link='https://psgstudentszone.netlify.app'
          image={img1}
        />
        <Specialization
          specID='spec2'
          Header='Front-End Development'
          subHeader='Teachers Portal'
          Content='React JS, CSS, JavaScript, HTML, Figma'
          reason='It is also final year project in my college. This portal is used for teachers to manage the students portal activities and for teachers to manage their academic works'
          Link='http://psgteacherszone.netlify.app/'
          image={img2}
        />
        <Specialization
          specID='spec3'
          Header='Data Analysis'
          subHeader='Wine Quality Prediction'
          Content='Python, R- Programming, Pandas, Machine Learning'
          reason='I develop prediction models using python, ML and R. I started this by visualizing the data. I started to learn this from my 2nd year of college and am still learning to improve my accuracy of models.'
          Link='https://github.com/rajkumar035/Wine-Quality-Prediction'
          image={img3}
        />
      </div>
    </section>
  );
}

export default SpecializationView;
