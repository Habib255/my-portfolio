import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faBootstrap, faReact, faJsSquare, faNode, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons'
import tailwind from '../Images/tailwind.svg'
import mongodb from '../Images/mongodb-icon.svg'
import firebase from '../Images/firebase.png'

const MySkills = () => {
    return (
        <div id='skills' className='py-20 bg-gradient-to-b lg:bg-gradient-to-r from-slate-600 to-slate-700 '>
            <h2 className='text-center mb-8 text-4xl font-mono font-semibold text-orange-300'> My Skills & Tools</h2>
            <div className='flex flex-wrap justify-center items-center gap-16'>
                <div className='grid grid-cols-2 gap-16'>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faHtml5} />
                        <p className='text-black font-serif font-bold text-xl'>HTML5</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faCss3} />
                        <p className='text-black font-serif font-bold text-xl'>CSS3</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <img className='w-16' src={tailwind} alt="tailwind-icon" />
                        <p className='text-black font-serif font-bold text-xl'>Tailwind css</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faBootstrap} />
                        <p className='text-black font-serif font-bold text-xl'>Bootstrap</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faJsSquare} />
                        <p className='text-black font-serif font-bold text-xl'>JavaScript</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faReact} />
                        <p className='text-black font-serif font-bold text-xl'>React Js</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faNode} />
                        <p className='text-black font-serif font-bold text-xl'>Node Js</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <p className='text-slate-400 bg-slate-800 p-1 rounded-sm text-3xl font-bold'> EX</p>
                        <p className='text-black font-serif font-bold text-xl'>Express Js</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-16'>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <div className='bg-black w-16 h-16 flex justify-center items-center rounded-full'> <img className=' h-12' src={mongodb} alt="mongodb" /></div>
                        <p className='text-black font-serif font-bold text-xl'>MongoDB</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faGithub} />
                        <p className='text-black font-serif font-bold text-xl'>Git Hub</p>
                    </div>

                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <FontAwesomeIcon className='text-black text-4xl' icon={faFigma} />
                        <p className='text-black font-serif font-bold text-xl'>Figma</p>
                    </div>
                    <div className=' bg-slate-200 h-28 w-36 flex flex-col justify-center items-center gap-2 shadow-lg rounded-tr-3xl rounded-br-none rounded-tl-none rounded-bl-3xl'>
                        <div className='bg-black w-16 h-16 flex justify-center items-center rounded-full'> <img className='w-16' src={firebase} alt="tailwind-icon" /></div>
                        <p className='text-black font-serif font-bold text-xl'>Firebase</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default MySkills;