import React from 'react';

const Skills = () => {
  return (
    // <div id="skills" className="ml-16 mr-8">
    <div id="skills" className="md:ml-16">

      <p className="text-2xl text-white font-bold">Skills</p>

      <card className="flex gap-x-0.5 mr-8 skills-container">
        <div className="bg-gray-800 rounded-lg mt-12 w-72 h-64 ml-8 flex flex-wrap p-6">
          <div className="text-xl text-cyan-50 mb-4 w-full">FRONTEND</div>

          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">HTML</span>
          <span className="border border-green-500 text-gray-500 rounded-lg p-2 m-2">CSS</span>
          <span className="border border-yellow-500 text-gray-500 rounded-lg p-2 m-2">TAILWIND</span>
          <span className="border border-pink-500 text-gray-500 rounded-lg p-2 m-2">JAVASCRIPT</span>
          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">TYPESCRIPT</span>
          <span className="border border-green-500 text-gray-500 rounded-lg p-2 m-2">REACT</span>
        </div>

        <div className="bg-gray-800 rounded-lg mt-12 w-72 h-64 ml-8 flex flex-wrap p-6">
          <div className="text-xl text-cyan-50 mb-4 w-full">BACKEND</div>

          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">Node Js</span>
          <span className="border border-green-500 text-gray-500 rounded-lg p-2 m-2">Express Js</span>
          <span className="border border-yellow-500 text-gray-500 rounded-lg p-2 m-2">BUN Js</span>
          <span className="border border-pink-500 text-gray-500 rounded-lg p-2 m-2">Elysia</span>
          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">Next Auth</span>
          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">Next Auth</span>

        </div>

        <div className="bg-gray-800 rounded-lg mt-12 w-72 h-64 ml-8 flex flex-wrap p-6">
          <div className="text-xl text-cyan-50 mb-4 w-full">DATABSE</div>

          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">MySql</span>
          <span className="border border-green-500 text-gray-500 rounded-lg p-2 m-2">MongoDB</span>
          <span className="border border-yellow-500 text-gray-500 rounded-lg p-2 m-2">PostgreSQL</span>
          <span className="border border-pink-500 text-gray-500 rounded-lg p-2 m-2">Redis</span>
          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">Elastic Search</span>

        </div>

        <div className="bg-gray-800 rounded-lg mt-12 w-72 h-64 ml-8 flex flex-wrap p-6">
          <div className="text-xl text-cyan-50 mb-4 w-full">PROGRAMMING</div>

          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">C</span>
          <span className="border border-green-500 text-gray-500 rounded-lg p-2 m-2">C++</span>
          <span className="border border-yellow-500 text-gray-500 rounded-lg p-2 m-2">JAVA</span>
          <span className="border border-pink-500 text-gray-500 rounded-lg p-2 m-2">KOTLIN</span>
          <span className="border border-blue-500 text-gray-500 rounded-lg p-2 m-2">PYTHON</span>

        </div>

      </card>
    </div>
  );
};


export default Skills;

