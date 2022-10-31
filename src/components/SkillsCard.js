import React from 'react';
import { FaReact, FaHtml5, FaVuejs, FaPython  } from 'react-icons/fa';
import { FiDatabase  } from 'react-icons/fi';
import {DiCss3} from 'react-icons/di';
import { SiJavascript } from 'react-icons/si'
import Skills from './Skills';

export default function SkillsCard({ skill }) {
    const showLogo = (name) => {
        switch(name) {
            case 'FaReact':
                return <FaReact />;
            case 'FaHtml5':
                return <FaHtml5 />;
            case 'DiCss3':
                return <DiCss3 />;
            case 'SiJavascript':
                return <SiJavascript />
            case 'FaVuejs':
                return <FaVuejs />;
            case 'FaPython':
                return <FaPython />;
            case 'FiDatabase':
                return <FiDatabase />
                        }
    }


  return (

    <div className="text-center bg-gray-800 m-4 p-4 rounded-lg shadow-md shadow-slate-600">
        <h3 className="text-2xl mb-3">{skill.name}</h3>
        <p className="text-sky-500 text-5xl text-center flex justify-center mb-5">{showLogo(skill.logo)}</p>
        <div className="flex flex-wrap gap-1">{skill.description.map((item) => 
            <span className="text-sm mr-1 px-5 py-2 bg-slate-900 rounded-full shadow-md shadow-slate-700" key={item}>{item}</span>
        )}</div>
    </div>
  )
}
