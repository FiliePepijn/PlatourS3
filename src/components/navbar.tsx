import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>('home'); // Set 'home' as the default active link

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a
        href="/"
        className={`${activeLink === 'home' ? 'active' : ''} `}
        onClick={() => handleLinkClick('home')}
      >
        Home
      </a>
      <a
        href="/about"
        className={`${activeLink === 'about' ? 'active' : ''} `}
        onClick={() => handleLinkClick('about')}
      >
        About
      </a>
      <a
        href="/projects"
        className={`${activeLink === 'projects' ? 'active' : ''} `}
        onClick={() => handleLinkClick('projects')}
      >
        Projects
      </a>
      <a
        href="/lo"
        className={`${activeLink === 'lo' ? 'active' : ''} `}
        onClick={() => handleLinkClick('lo')}
      >
        LO
      </a>
      <a
        href="/contact"
        className={`${activeLink === 'contact' ? 'active' : ''} `}
        onClick={() => handleLinkClick('contact')}
      >
        Contact
      </a>
      <div className={`animation start-${activeLink}`} />
    </nav>
  );
};

export default Navbar;