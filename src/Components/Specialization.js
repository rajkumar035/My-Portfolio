import React from 'react';
import '../Assets/CSS/Specialization.css';
import { BsArrowRight } from 'react-icons/bs';

const Specialization = ({
  Header,
  Content,
  Link,
  subHeader,
  specID,
  reason,
  image,
}) => {
  return (
    <section id={specID} className='specialization'>
      <div className='Section-Content'>
        <h3>{Header}</h3>
        <h4>{subHeader}</h4>
        <h5>
          Requirements: &nbsp;
          {Content}
        </h5>
        <h6>{reason}</h6>
        <button>
          <a href={Link}>
            Try it <BsArrowRight />
          </a>
        </button>
      </div>
      <div className='Section-Img'>
        <img src={image} alt='def-img' />
      </div>
    </section>
  );
};

export default Specialization;
