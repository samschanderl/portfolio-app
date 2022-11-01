import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// import components
import SingleSlide from './SingleSlide';

// import images
import MeditationImg from '../images/meditation-app-img.png';
import CertificateImg from '../images/certificate-generator.png';
import TodoImg from '../images/todo-app.png';
import ApartmentImg from '../images/apartment-listing.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
    img: TodoImg,
    link: 'https://delightful-cocada-b8dc0f.netlify.app/'},
    // {title: 'Finance Tracker App', 
    // technologies: ['React', 'Firebase'],
    // description: 'App that lets user manage their financial transactions. Allows user to create an account and then log in to manage their expense transactions.',
    // img: '',
    // link: ''},
    {title: 'Certificate Generator', 
    technologies: ['HTML', 'CSS', 'Javascript'],
    description: 'The app allows you to generate and download a course certificate. Solution was implemented in an online cooking school.',
    img: CertificateImg,
    link: 'https://nimble-crepe-557937.netlify.app/'},
    {title: 'Apartment Listing Site', 
    technologies: ['React', 'NodeJS'],
    description: 'The site lists apartment listings, allows you to watch each single listing. You can also add new listings.',
    img: ApartmentImg,
    link: 'https://jocular-biscuit-1f33db.netlify.app/'},
    
  ]

  return (
    <>
      <h1 className="text-6xl m-10 text-left max-w-5xl mx-auto px-10 animate__animated animate__fadeInLeftBig animate__delay-2s">Portfolio Projects<span className="text-sky-500">.</span></h1>
    
    <div className="bg-gradient-to-r from-slate-600 to-slate-800 py-6">
      
      <Swiper className="w-12/12 my-6"
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3
          }
        }}
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{clickable: true}}
        grabCursor={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project) => 
          <SwiperSlide className="max-w-sm m-4 bg-slate-900 p-4 rounded-md shadow-md shadow-slate-400 grid md:grid-cols-1">
            <img className="w-full object-cover aspect-video mb-2" src={project.img} alt="" />
            <div className="md:col-span-2 p-4 grid">
              <h1 className="text-xl mb-4 w-full">{project.title}</h1>
              <p className="italic mb-6">"{project.description}"</p>
              <div>
              {project.technologies.map(item => 
                <span className="bg-slate-700 px-2 py-1 mr-1 mt-2 rounded-full">{item}</span>
              )}
              </div>
              <a href={project.link} className="mx-auto mt-6 bg-slate-200 text-slate-900 rounded-md px-2 py-1 hover:cursor-pointer hover:bg-sky-500 hover:text-slate-200">See Demo</a>
            </div>

          
          </SwiperSlide>
        )
        }

      </Swiper>
    </div>
    </>
  )
}
