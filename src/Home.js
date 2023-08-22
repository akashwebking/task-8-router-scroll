import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

function Home() {
  return (
    <div>
      <header>
        <div><img src="https://img.lovepik.com/element/45006/8218.png_860.png" alt="" /></div>
        <nav>
            <ul>
                <li> <ScrollLink to="home" smooth={true}>Home</ScrollLink></li>
                <li><ScrollLink to="career" smooth={true}>Career</ScrollLink></li>
                <li><ScrollLink to="about" smooth={true}>About</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true}>Contact</ScrollLink></li>
            </ul>
         
          
          
          
        </nav>
      </header>
      <section id="home">
        <div className='box'>
            <h1>welcome</h1>
            <h1>to</h1>
            <h1>Home page</h1>
        </div>
       
      </section>
      <section id="career">
      <div className='box'>
            <h1>welcome</h1>
            <h1>to</h1>
            <h1>career page</h1>
        </div>
        
      </section>
      <section id="about">
      <div className='box'>
            <h1>welcome</h1>
            <h1>to</h1>
            <h1>About page</h1>
        </div>
      </section>
      <section id="contact">
      <div className='box'>
            <h1>welcome</h1>
            <h1>to</h1>
            <h1>Contact page</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;
