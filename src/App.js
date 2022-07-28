import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SpecializationView from './Pages/SpecializationView';

function App() {
  return (
    <article className='container-body'>
      <header>
        <Nav
          homeId='#home'
          aboutId='#about'
          specializationId='#specialization'
          contactId='#contact'
        />
      </header>
      <section>
        <Home homeId='home' />
        <About aboutId='about' />
        <SpecializationView specId='specialization' />
        <Contact contactId='contact' />
      </section>
      <footer>
        <h4 className='footer-touch'>Made with React</h4>
      </footer>
    </article>
  );
}

export default App;
