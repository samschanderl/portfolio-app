import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// import components
import SingleSlide from './SingleSlide';
import MeditationImg from '../images/meditation-app-img.png'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './PortfolioSlider.css'

export default function PortfolioSlider() {
  const projects = [
    {title: 'Meditation App', 
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Meditation app that guides your meditation and tells you when to breathe in, hold, and breathe out. It lets you pick a sound and the length of each round.',
    img: MeditationImg,
    link: 'https://venerable-platypus-64b48f.netlify.app/'},
    {title: 'Todo App', 
    technologies: ['React', 'Javascript'],
    description: 'Todo App that lets you add todo items and mark them as completed or uncompleted. You can also delete them.',
    img: '',
    link: ''},
    {title: 'Finance Tracker App', 
    technologies: ['React', 'Firebase'],
    description: 'App that lets user manage their financial transactions. Allows user to create an account and then log in to manage their expense transactions.',
    img: '',
    link: ''},
    {title: 'Certificate Generator', 
    technologies: ['HTML', 'CSS', 'Javascript'],
    description: 'The app allows you to generate and download a course certificate. Solution was implemented in an online cooking school.',
    img: '',
    link: ''},
    
  ]

  return (
    <>
      <h1 className="text-6xl m-10 text-left max-w-5xl mx-auto px-10">Portfolio Projects<span className="text-sky-500">.</span></h1>
    
    <div className="bg-gradient-to-r from-slate-600 to-slate-800 py-6">
      
      <Swiper className="w-12/12 my-6"
        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          }
        }}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project) => 
          <SwiperSlide className="max-w-lg m-4 bg-slate-900 p-4 rounded-md shadow-md shadow-slate-400 grid md:grid-cols-1">
            <img className="w-full object-cover aspect-video" src={project.img} alt="" />
            <div className="md:col-span-2 p-4">
              <h1 className="text-xl mb-4 w-full">{project.title}</h1>
              <p className="italic mb-4">"{project.description}"</p>
              {project.technologies.map(item => 
                <span className="bg-slate-700 px-2 py-1 mr-1 mt-2 rounded-full">{item}</span>
              )}
            </div>
          
          </SwiperSlide>
        )
        }
      </Swiper>
    </div>
    </>
  )
}
