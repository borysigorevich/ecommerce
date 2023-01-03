import React from 'react';
import {Categories, Contact, FeaturedProducts, Slider} from "../components";

export const Home = () => {
    return (
        <div>
            <Slider/>
            <FeaturedProducts type='Featured Products'/>
            <Categories/>
            <FeaturedProducts type='Trending Products'/>
            <Contact/>
        </div>
    );
};