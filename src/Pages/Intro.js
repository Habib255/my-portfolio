import React from 'react';
import Image from '../Images/hh5.svg'

const Intro = () => {
    return (
        <div className='bg-gradient-to-b lg:bg-gradient-to-r from-zinc-700 to-slate-700 flex flex-col lg:flex-row gap-10'>
            <div className='flex flex-col basis-1/2 items-center justify-center gap-5'>
                <div className='lg:pl-20 pl-8'>
                    <h3 className='text-4xl font-mono font-bold text-gray-100'>Hi There,</h3>
                    <h2 className='text-3xl  mt-4 font-serif font-semibold text-cyan-200'>I'm <span className='text-sky-400'>Md Habibur Rahman</span></h2>
                    <h3 className='text-2xl mt-4 font-sans font-semibold text-orange-100' >A <span className='text-cyan-300'>Freelance</span> Web Developer <span className='text-cyan-300'>*MERN Stack*</span></h3>
                    <p className='text-gray-200 mt-4'>If you're seaching a web developer skilled with frontend and backend on React.Js, Node.Js,Express.Js, MongoDB, Html, Css, Tailwind & Bootstrap then ...</p>

                </div>
                <button className=" w-32 text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    Hire Me</button>
            </div>
            <div className='basis-1/2'>
                <img className='rounded w-4/6 mx-auto' src={Image} alt="my pic" />
            </div>
        </div>
    );
};

export default Intro;