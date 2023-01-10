import React from 'react';
import {Link} from 'react-router-dom'

import {MdKeyboardArrowDown} from 'react-icons/md'

import {AiOutlineSearch, AiFillHeart} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {Cart} from "./Cart";

export const Navbar = () => {
    return (
        <header>
            <nav className='flex justify-between items-center max-w-7xl mx-auto py-4 h-[80px]'>
                <div className='flex gap-6 items-center'>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <img src="/en.png" alt="language" className='w-6'/>
                        <MdKeyboardArrowDown/>
                    </div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <span>USD</span>
                        <MdKeyboardArrowDown/>
                    </div>
                    <div>
                        <Link to='products/1'>Men</Link>
                    </div>
                    <div>
                        <Link to='products/2'>Women</Link>
                    </div>
                    <div>
                        <Link to='products/3'>Children</Link>
                    </div>
                </div>
                <div>
                    <Link to='/' className='text-4xl text-[#2879fe] font-semibold'>Store</Link>
                </div>
                <div className='flex gap-10 items-center'>
                    <div className='flex gap-6'>
                        <div>
                            <Link to='/'>Home</Link>
                        </div>

                        <div>
                            <Link to='/'>About</Link>
                        </div>

                        <div>
                            <Link to='/'>Contacts</Link>
                        </div>

                        <div>
                            <Link to='/'>Stores</Link>
                        </div>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <AiOutlineSearch/>
                        <BsFillPersonFill/>
                        <AiFillHeart/>
                        <Cart/>
                    </div>
                </div>
            </nav>
        </header>
    );
};