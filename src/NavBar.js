
import React from 'react';
import { FaHome, FaFolderOpen, FaCode, FaAddressCard } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 h-full w-36 fixed top-0 left-0 flex flex-col justify-center items-center">
      <Link to="home" smooth={true} duration={500} className="text-white p-4 hover:bg-gray-700">
        <FaHome size={20} />
      </Link>
      <Link to="projects" smooth={true} duration={500} className="text-white p-4 hover:bg-gray-700">
        <FaFolderOpen size={20} />
      </Link>
      <Link to="skills" smooth={true} duration={500} className="text-white p-4 hover:bg-gray-700">
        <FaCode size={20} />
      </Link>
      <Link to="contact" smooth={true} duration={500} className="text-white p-4 hover:bg-gray-700">
        <FaAddressCard size={20} />
      </Link>
    </nav>
  );
};

export default NavBar;
