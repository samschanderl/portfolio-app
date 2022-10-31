import React from 'react'

// components
import SkillsCard from './SkillsCard';

export default function Skills() {
    const skills = [
        {name: 'HTML',
        logo: 'FaHtml5',
        description: ['HMTL5', 'Modern  UI', 'Responsive web design']
        },
        {name: 'CSS',
        logo: 'DiCss3',
        description: ['CSS3', 'SCSS', 'Tailwind CSS', 'Bootstrap']
        },
        {name: 'Javascript',
        logo: 'SiJavascript',
        description: ['DOM Manipulation', 'JQuery', 'NodeJS']
        },
        {name: 'React',
        logo: 'FaReact',
        description: ['Web UIs', 'Data Fetching', 'Routing', 'Authentication']
        },
        {name: 'Vue',
        logo: 'FaVuejs',
        description: ['Web UIs', 'Data Fetching', 'Routing', 'Authentication']
        },
        {name: 'Python',
        logo: 'FaPython',
        description: ['Selenium', 'Pandas', 'Django']
        },
        {name: 'Databases',
        logo: 'FiDatabase',
        description: ['Firebase', 'SQL']
        }
    ]

  return (
    <div className="m-10 max-w-5xl mx-auto p-6">
        <h1 className="text-6xl mb-4 text-left p-4 animate__animated animate__fadeInLeftBig">Skills<span className="text-sky-500">.</span></h1>
        <div className="grid md:grid-cols-3 grid-cols-1  mx-auto justify-items-stretch">
            {skills.map(skill => 
                <SkillsCard skill={skill} key={skill.name} />
            )}
        </div>
    </div>
  )
}
