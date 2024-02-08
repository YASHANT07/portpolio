import React from 'react'
import { TechCart } from '../MicroComponent/TechCart'
import html from "../Assect/tech/html.png"
import css from "../Assect/tech/css.png"
import js from "../Assect/tech/js-file.png"
import cpp from "../Assect/tech/cpp.png"
import typescript from "../Assect/tech/typescript.png"

import react from "../Assect/tech/react.png"
import next from "../Assect/tech/nextjs.svg"
import tailwind from "../Assect/tech/tailwind.svg"
import node from "../Assect/tech/nodejs.svg"
import express from "../Assect/tech/express.png"
import mongodb from "../Assect/tech/mongodb.png"
import socket from "../Assect/tech/socketio.svg"
import sql from "../Assect/tech/sql.png"
import git from "../Assect/tech/git.svg"
import aws from "../Assect/tech/aws.png"


export const TechStack = () => {
  const frontend = [html , css , tailwind , react ,next ];
  const backend = [node , express , socket];
  const database = [sql , mongodb];
  const devopps = [git , aws];
  const programmingLangauge = [js , cpp , typescript];

  return (
    <div className='px-8'>
        <p className="text-2xl mb-5">Tech Stack</p>

        <div className='flex flex-wrap gap-5  '>
            <TechCart title={"Frontend"}  src={frontend} />
            <TechCart title={"Backend"}  src={backend} />
            <TechCart title={"Data Base"}  src={database} />
            <TechCart title={"Devops"}  src={devopps} />
            <TechCart title={"Programming Langauge"}  src={programmingLangauge} />

        </div>

    </div>
  )
}
