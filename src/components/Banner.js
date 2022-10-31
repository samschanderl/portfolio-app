import { useState, useEffect } from 'react';

// import context
import { useStateContext } from '../contexts/StateContext';

// import images
import samuel from '../images/samuel-2.jpg'

// import styles
import './Banner.css'

export default function Banner() {

    const [textOne, setTextOne ] = useState('');
    const first_text = 'Hello there! 👋';

    const { toggleModal} = useStateContext();

    // typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextOne(first_text.slice(0,textOne.length + 1));
            if (textOne.length === first_text.length) {
                setTimeout(() => {
                    setTextOne('')
                },5000) 
            }
        }, 100)
        return () => clearTimeout(timeout)
    },[textOne])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 h-full max-w-5xl mx-auto md:mb-5">
        <div className="flex flex-wrap md:justify-end justify-center items-center p-10 relative">
            <img id="profile" className="md:w-4/5 w-4/6 h-auto pd-10 object-cover aspect-square rounded-full z-10 shadow-lg shadow-slate-400" src={samuel} alt="" />
            {/* <div id="circle-1" className="absolute w-72 h-72 rounded-full bg-slate-200 z-5"></div> */}
        </div>
        <div className="text-left m-10 col-span-2">
            <h2 className="text-2xl mb-2 text-sky-500"><span className="text-slate-200">//</span> Samuel Schanderl</h2>
            <h1 className="text-6xl mb-4">Web Developer<span className="text-20xl text-sky-500">.</span></h1>
            <p className="blinking-cursor italic">{textOne}</p>
            <p className="text-lg my-2">I'm a Berlin-based developer who loves creating modern user interfaces with React, Vue, and Javascript.</p>
            <button className="bg-sky-500 hover:bg-sky-700 p-2 mt-4 rounded-lg" onClick={toggleModal}>Get in Touch</button>
        </div>

    </div>
        )
      }
