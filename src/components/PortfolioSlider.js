import {useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { Projects } from '../data/Projects';

//  import icons
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from 'react-icons/bs';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './PortfolioSlider.css'

export default function PortfolioSlider() {
  const [current, setCurrent] = useState(0);
  const max = Projects.length - 1

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(max - 1)
    }
    else if (current != 0) {
      setCurrent(current - 1)
    }
  }

  const nextSlide = () => {
    if (current === max) {
      setCurrent(0)
    }
    else {
      setCurrent(current + 1)
    }
  }

  useEffect(() => {
    console.log(current)
  }, [current])

  if (!Array.isArray(Projects) || Projects.length <= 0) {
    return null
  }

  return (
    <>
      <h1 className="text-6xl m-10 text-left max-w-5xl mx-auto px-10 animate__animated animate__fadeInLeftBig animate__delay-2s">Portfolio Projects<span className="text-sky-500">.</span></h1>
    
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 py-12">
      <div className="relative flex flex-nowrap justify-center">
        <BsFillArrowLeftCircleFill className="absolute sm:left-10 left-1 top-2/4 text-4xl z-10" onClick={prevSlide}/>
        <BsFillArrowRightCircleFill className="absolute sm:right-10 right-1 top-2/4 text-4xl shadow-md z-10" onClick={nextSlide}/>
        {Projects.map((project, index) => 
        {if (index === current) {
          return (
            <div className="grid md:grid-cols-2 grid-cols-1 md:max-w-screen-md sm:max-w-sm max-w-sm mx-8 bg-slate-900 rounded-lg overflow-hidden shadow-lg shadow-slate-500 animate__animated animate__fadeIn" key={project.name}>
              <img src={project.img} />
              <div className="p-6 flex flex-col items-center">
                <h2 className="text-4xl mb-6 animate__animated animate__fadeIn">{project.title}</h2>
                <div className="h-px w-2/5 mb-6 bg-sky-400 animate__animated animate__fadeInLeft animate__faster"></div>
                <p className="mb-4">{project.description}</p>
                <div className="my-6 flex justify-center">{project.technologies.map(item => (
                  <span className="mr-2 px-4 py-1 bg-slate-700 rounded-full"key={item}>{item}</span>
                ))}</div>
                <a href={project.link} target="_blank" className="my-2 bg-slate-200 rounded-md text-slate-900 py-1 px-2 hover:cursor-pointer hover:bg-slate-300">See Demo</a>
              </div>
            </div>
          )
        }
          return ''
        })
      }
      </div>

      </div>
    </>
  )
}
