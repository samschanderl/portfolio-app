import React from 'react';
import { BsGithub, BsLinkedin} from 'react-icons/bs';

// get context
import { useStateContext } from '../contexts/StateContext';

export default function Navbar() {
  const LinkedinURL = 'https://www.linkedin.com/in/samuel-schanderl-249499a0/';
  const GithubURL = 'https://github.com/samschanderl';

  const { openModal, setOpenModal, toggleModal } = useStateContext();

  return (
    <div className="fixed bg-gradient-to-r from-slate-600 to-slate-800 w-full top-0 z-50 p-4 flex justify-stretch shadow-md shadow-slate-400">
      <div className="container max-w-screen-lg flex gap-5 justify-end items-center mx-auto">
        <div className="mr-auto text-left">
          <p>Samuel</p>
          <p>Schanderl</p>
        </div>
        <a href={GithubURL} className="hover:cursor-pointer"><BsGithub className="text-2xl"/></a>
        <a href={LinkedinURL} className="hover:cursor-pointer"><BsLinkedin className="text-2xl"/></a>
        <button onClick={toggleModal} className="bg-sky-500 p-2 rounded-lg">Get In Touch</button>
      </div>
    </div>
  )
}
