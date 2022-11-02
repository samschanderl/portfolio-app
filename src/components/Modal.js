import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser'

// get context
import { useStateContext } from '../contexts/StateContext';

export default function Modal() {
    const { openModal, setOpenModal, toggleModal } = useStateContext();
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [message, setMessage ] = useState('');
    const [emailSend, setEmailSend ] = useState(false);
    const [successMessage, setSuccessMessage ] = useState(false);
    const [errorMessage, setErrorMessage ] = useState(false);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting form')
        console.log({ name, email, message })
        setSuccessMessage(false);
        setErrorMessage(false);

        emailjs.sendForm('service_rrxiorv', 'template_d7vkxac', form.current, 'QU5KjPrrerpUP70px')
        .then((result) => {
            console.log(result.text);
            setSuccessMessage(true);
            console.log(successMessage)
            setTimeout(() => {
                clearForm()
            }, 2000)
        }, (error) => {
            console.log(error.text)
            setErrorMessage(true);
            setTimeout(() => {
                clearForm()
            }, 2000)
        });

        setTimeout(() => {
            if (successMessage) {
                toggleModal();
                setSuccessMessage(false);
            }
        }, 2000)
    }

    const clearForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage(false);
        setErrorMessage(false);
    }

    useEffect(() => 
        console.log(openModal)
    , [openModal])

    useEffect(() => {
        console.log('Sucess Message: ', successMessage)
    }, [successMessage])

  return (
    <>
    {!openModal && ''}
    {openModal &&
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-700 bg-opacity-80 flex justify-center items-center z-50">
        <form ref={form} onSubmit={handleSubmit} className="relative bg-slate-300 p-4 rounded-lg text-slate-900 md:max-w-screen-sm w-5/6 grid gap-2">
            <AiFillCloseCircle className="absolute top-2 right-2 text-3xl text-slate-600 hover:cursor-pointer" onClick={toggleModal}/>
            <h3 className="text-2xl text-sky-500 italic mb-4">Get in touch</h3>
            <div className="grid text-left mb-4">
                <label 
                className="mb-2" 
                htmlFor="name">Name</label>
                <input 
                className="rounded-sm p-1" 
                type="text" 
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required/>
            </div>
            <div className="grid text-left mb-4">
                <label 
                className="mb-2" 
                htmlFor="name">Email</label>
                <input 
                className="rounded-sm p-1" 
                type="email" 
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="grid text-left mb-4">
                <label 
                className="mb-2" 
                htmlFor="name">Your Message</label>
                <textarea 
                className="rounded-sm p-1" 
                type="textarea" 
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required/>
            </div>
            {successMessage && <p className="mb-4 text-slate-50 bg-emerald-400 p-2 rounded-md">Success!! I'll get back to you shortly!</p>}
            {errorMessage && <p className="mb-4 text-slate-50 bg-rose-400 p-2 rounded-md">Sorry! Something went wrong. Please try again</p>}
            <input 
            className="bg-sky-500 w-full p-2 rounded-md text-slate-100 hover:cursor-pointer hover:bg-sky-700"
            type="submit" 
            value="Submit" 
            />
        </form>
    </div>
    }
    </>

  )
}
