import React from 'react';
import '../Assets/CSS/Contact.css';
import { BsFillTelephoneFill, BsGithub } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = ({ contactId }) => {
  return (
    <section id={contactId} className='contacts'>
      <div className='contact-body'>
        <button className='phone'>
          <a href='9487544609'>
            <BsFillTelephoneFill className='contact-icons' />
            <br />
            <h4>Call</h4>
            <h6>9487544609</h6>
          </a>
        </button>
        <button className='mail'>
          <a href='http://mail.google.com/'>
            <MdMail className='contact-icons' />
            <br />
            <h4>E-Mail</h4>
            <h6>rajkumardhandapani03@mail.com</h6>
          </a>
        </button>
        <button className='linked-in'>
          <a href='https://www.linkedin.com/in/raj-kumar-d-4843a522b/'>
            <FaLinkedinIn className='contact-icons' />
            <br />
            <h4>Linked In</h4>
            <h6>Raj Kumar D</h6>
          </a>
        </button>
        <button className='github'>
          <a href='https://github.com/rajkumar035'>
            <BsGithub className='contact-icons' />
            <br />
            <h4>Git Hub</h4>
            <h6>rajkumar035</h6>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Contact;
