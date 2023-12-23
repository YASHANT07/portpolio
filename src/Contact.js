// Contact.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaXing } from 'react-icons/fa';

const Contact = () => {
  return (
    <div id="contact" className="md:ml-16 text-slate-50">
      <p className="text-2xl mt-8 text-white font-bold">Contacts</p>
      <div className="pl-16 py-5">

        <p className="text-2xl mb-4">Let's Work Together</p>

        <a href="mailto:thakuryashant100@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center mr-4 mt -4">
          <FaEnvelope size={24} color="#000" />
          <span className="ml-2">Email</span>
        </a>


        <a href="https://www.linkedin.com/in/yashant-thakur-746135226/" target="_blank" rel="noopener noreferrer" className="flex items-center mr-4 mt-4">
          <FaLinkedin size={24} color="#0077b5" />
          <span className="ml-2">LinkedIn</span>
        </a>


        <a href="https://twitter.com/yashant_thakur?t=O3qvyDShM4QPFfwjvlU2Kw&s=08" target="_blank" rel="noopener noreferrer" className="flex items-center mr-4 mt-4">
          <FaXing size={24} color="#000000" />
          <span className="ml-2">X</span>
        </a>

      </div>
    </div>
  );
};

export default Contact;
