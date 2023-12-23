
import React from 'react';
import { FaHome, FaFolderOpen, FaCode, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    // <div className=''>
      <div className="nav-container bg-gray-900">
        <Link to="home" smooth={true} duration={500} className="text-white cursor-pointer  hover:text-purple-400">
          <FaHome size={30} />
        </Link>
        <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer  hover:text-purple-400">
          <FaFolderOpen size={30} />
        </Link>
        <Link to="skills" smooth={true} duration={500} className="text-white cursor-pointer hover:text-purple-400">
          <FaCode size={30} />
        </Link>
        <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer hover:text-purple-400">
          <FaAddressCard size={30} />
        </Link>
      </div>
    // </div>
  );
};

export default NavBar;
