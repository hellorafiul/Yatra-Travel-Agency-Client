import React from 'react';
import Hero from './../Hero/Hero';
import Services from './../Services/Services';
import Special from './../Special/Special';
import WhyUs from './../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Special></Special>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;