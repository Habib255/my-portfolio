import React from 'react';
import habib2 from "../Images/habib2.svg";

const About = () => {
    return (
        <div id='about' className='bg-gradient-to-b lg:bg-gradient-to-r from-slate-600 to-slate-700 py-20'>
            <h1 className='text-3xl font-mono text-center font-semibold'>About Me</h1>
            <div className='flex flex-wrap justify-evenly items-center '>


                <div className='flex justify-center items-center w-96'>
                    <img className='rounded-3xl' src={habib2} alt="my-pic" />
                </div>

                <div className="p-6 col-span-1 lg:col-span-2 xl:col-span-3 flex flex-col font-mono text-xl text-white font-bold gap-5">
                    <h2> Name: Md Habibur Rahman</h2>
                    <h2> NickName: Habib</h2>
                    <h2>Email: arhabib255@gmail.com</h2>
                    <h2>Profession: Freelance MERN STACK Developer</h2>
                    <h2>Workplace: Fiverr, Upwork & Freelance</h2>
                    <p>Education: Hsc from Dr. Khandaker Mosharraf Hossain College,</p>
                    <p>Education: Bsc in CSE in Bangladesh open University(1st semister)</p>

                </div>
            </div>


        </div>
    );
};

export default About;