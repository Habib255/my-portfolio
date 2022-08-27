import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const downloadResume = () => {
        fetch('Habib-Resume.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Habib-Resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="fixed z-10 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="#intro">Home</Link></li>
                        <li><Link to='#services' smooth>Services</Link></li>
                        <li><Link to="#skills" smooth>Skills</Link></li>
                        <li><Link to="#projects" smooth>Projects</Link></li>
                        <li><Link to='#about' smooth>About</Link></li>
                        <li><Link to='#contact' smooth>Contact</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl lg:ml-32">My Portfolio</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="#intro">Home</Link></li>
                    <li><Link to='#services' smooth>Services</Link></li>
                    <li><Link to="#skills" smooth>Skills</Link></li>
                    <li><Link to="#projects" smooth>Projects</Link></li>
                    <li><Link to='#about' smooth>About</Link></li>
                    <li><Link to='#contact' smooth>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={downloadResume} className="gap-2 text-black btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 delay-500 duration-300 mr-10">  <FontAwesomeIcon icon={faDownload} />
                    Resume</button>
            </div>

        </div>
    );
};

export default Navbar;