import React from 'react';
import Intro from './Intro';
import MyServices from './MyServices';
import MySkills from './MySkills';
import Navbar from './Navbar';
import Project from './Project';
import Footer from "./Footer";
import About from "./About";
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <MyServices />
            <MySkills />
            <Project />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;