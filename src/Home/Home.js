import React from 'react';
import Hero from './../Hero/Hero';
import Services from './../Services/Services';
import Special from './../Special/Special';
import WhyUs from './../WhyUs/WhyUs';
import Download from './../Download/Download';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <WhyUs></WhyUs>
            <Special></Special>
            <Download></Download>
        </div>
    );
};

export default Home;