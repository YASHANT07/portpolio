
import React from 'react';
import { FaHome, FaFolderOpen, FaCode, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    // <div className=''>
      <div className="nav-container text-white bg-gray-900">
        {/* <Link to="#home" smooth={true} duration={500} className="text-white cursor-pointer  hover:text-purple-400"> */}
          <a href='#home'><FaHome size={30} /></a>
        {/* </Link> */}

        {/* <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer  hover:text-purple-400"> */}
          <a href='#projects'><FaFolderOpen size={30} /></a>
        {/* </Link> */}

        {/* <Link to="#skills" smooth={true} duration={500} className="text-white cursor-pointer hover:text-purple-400"> */}
          <a href='#skills'><FaCode size={30} /></a>
        {/* </Link> */}

        {/* <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer hover:text-purple-400"> */}
         <a href='#contact'><FaAddressCard size={30} /></a> 
        {/* </Link> */}
      </div>
    // </div>
  );
};

export default NavBar;
