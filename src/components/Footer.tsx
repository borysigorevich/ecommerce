import React from 'react';
import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <div className='max-w-7xl mx-auto pt-20'>
                <div className='grid grid-cols-2 gap-[150px] mb-10'>
                    <div className='flex gap-[300px]'>
                        <div className='grid gap-2'>
                            <h2 className='font-bold text-xl'>Categories</h2>
                            <Link to='/'>Women</Link>
                            <Link to='/'>Men</Link>
                            <Link to='/'>Shoes</Link>
                            <Link to='/'>Accessories</Link>
                            <Link to='/'>New Arrivals</Link>
                        </div>

                        <div className='grid gap-2'>
                            <h2 className='font-bold text-xl'>Links</h2>
                            <Link to='/'>FAQs</Link>
                            <Link to='/'>Pages</Link>
                            <Link to='/'>Stores</Link>
                            <Link to='/'>Compare</Link>
                            <Link to='/'>Cookies</Link>
                        </div>
                    </div>
                    <div className='flex justify-between gap-10'>
                        <div>
                            <h2 className='font-bold text-xl mb-3'>About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae corporis
                                error
                                nihil
                                optio qui repellat repellendus sed vel vitae?</p>
                        </div>

                        <div>
                            <h2 className='font-bold text-xl mb-3'>Contact</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus earum,
                                fugiat
                                harum molestias numquam odio provident quasi reiciendis tempora.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-10 items-center'>
                        <h2 className='text-3xl text-[#2879fe] font-bold'>Store</h2>
                        <p className='text-gray-500'>© Copyright 2023 All Rights Reserved</p>
                    </div>
                    <div>
                        <img src="/payment.png" alt="payment"/>
                    </div>
                </div>
            </div>
        </footer>
    );
};