import React from 'react';
import {Outlet} from 'react-router-dom'
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

export const Layout = () => {
    return (
        <div className="h-full grid grid-rows-[auto_1fr_auto]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};