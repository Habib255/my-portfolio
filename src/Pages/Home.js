import React from 'react';
import Intro from './Intro';
import MyServices from './MyServices';
import MySkills from './MySkills';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Intro/>
            <MyServices/>
            <MySkills/>
            <Project/>
        </div>
    );
};

export default Home;