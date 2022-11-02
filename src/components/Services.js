import React from 'react';
import {BsCheck} from 'react-icons/bs';

// get context
import { useStateContext } from '../contexts/StateContext';

export default function Services() {
    const Services = [
        {title: 'Starter Website',
        features: ['Website With Up To 4 Pages', 'Mobile-Responsive Design','Deployment & Hosting', 'SEO-Friendly'], 
        price: 'Starting from € 1.200'},
        {title: 'Complex Website',
        features: ['All Features From Starter, Plus', 'Multiple Pages', 'User Profile Creation', 'User Authentication', 'Payment Integration', '& More'], 
        price: 'Get a Quote Today'},
    ]

    const { toggleModal } = useStateContext();

  return (
    <div className="max-w-5xl mx-auto grid align-center my-6">
        <h1 className="text-6xl text-left m-4 p-6 animate__animated animate__fadeInLeft animate__delay-2s">Services<spam className="text-sky-500">.</spam></h1>
        <div className="grid md:grid-cols-2 grid-cols-1 max-w-screen-lg px-6">
            {Services.map(service => (
                <div className="bg-gradient-to-r from-slate-700 to-slate-900 m-4 p-6 rounded-lg shadow-md shadow-slate-400 grid place-content-around justify-items-stretch">
                    <h2 className="text-2xl mb-6">{service.title}</h2>
                    <div className="h-px w-2/5 mb-6 mx-auto bg-sky-500"></div>
                    <ul className="mb-6 px-6 text-left">
                        {service.features.map(feature => (
                            <li className="mb-2 flex gap-2 items-center"><BsCheck className="text-sky-500 text-2xl" />{feature}</li>
                        ))}
                    </ul>
                    <p className="mb-6 italic">{service.price}</p>
                    <button className="bg-sky-500 rounded-lg p-2 mb-6 hover:bg-sky-700" onClick={toggleModal}>Get In Touch</button>
                </div>
                
            ))}
        </div>
    </div>
  )
}
