import React, { useEffect, useState } from 'react'
import {navLinks} from '../constants/index.js'

const Navbar = () => {

  const [scrolled, setSecrolled] = useState(false);

  useEffect(()=> {
    const handleScroll=()=>{
      const isScrolled = window.scrollY > 10;
      setSecrolled = true;
    }

    window.addEventListener('scroll', handleScroll);

    return ()=> window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={`navber ${scrolled ? 'scrolled': 'not-scrolled'}`}>
        <div className="inner">
            <a href="#hero" className="logo">
                Beryan | A
            </a>

            <nav className='desktop'>
              <ul>
                {navLinks.map(({link, name}) => (
                  <li key={name} className='group'>
                    <a href={link}>
                      <span>{name}</span>
                      <span className='underline'></span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a href="#contact" className='contact-btn group'>
              <div className="inner">
                <span>Contact me</span>
              </div>
            </a>

        </div>
    </header>
  )
}

export default Navbar