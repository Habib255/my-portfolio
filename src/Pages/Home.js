import React from 'react';
import Intro from './Intro';
import MyServices from './MyServices';
import MySkills from './MySkills';
import Project from './Project';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <MyServices></MyServices>
            <MySkills></MySkills>
            <Project></Project>

        </div>
    );
};

export default Home;