import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import image1 from '../Images/design.jpg'
import image2 from '../Images/dev.jpg'
import image3 from '../Images/psd to htm.jpg'

const MyServices = () => {
    return (
        <div id='services' className='py-20 bg-gradient-to-b lg:bg-gradient-to-r from-slate-700 to-slate-600'>
            <div className='text-center mb-8 text-4xl font-mono font-semibold text-orange-300'>
                <h2>My Services</h2>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-10 lg:gap-20'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={image1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Website Designing</h2>
                        <p>I am an expert in designing Responsive website and also can add
                            functionality. I use HTML, CSS, Bootstrap, Tailwind Css,JavaScript,
                            React JS.Some example of my work are given below. </p>
                        <div className="card-actions justify-end">
                            <Link to='#contact' smooth><button className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get this service</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={image2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">MERN Stack Development</h2>
                        <p>I can Develop both frontend and Backend by MERN. I use React JS, Node JS, Express JS for developing and MongoDB as a Database.Take a look below for some of my FullStack Project </p>
                        <div className="card-actions justify-end">
                            <Link to='#contact' smooth><button className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get this service</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-64' src={image3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">PSD/Figma to Landing page</h2>
                        <p>I'm working on various site like-Fiverr, Upwork on converting PSD / Figma to Landing Page.I use HTML, CSS, Bootstrap, Tailwind Css,JavaScript,
                            React JS.You also can Hire me Here</p>
                        <div className="card-actions justify-end">
                            <Link to='#contact' smooth><button className="text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get this service</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyServices;