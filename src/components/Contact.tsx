import React from 'react';

import {BsPinterest} from 'react-icons/bs'
import {AiFillGoogleCircle, AiFillTwitterCircle, AiFillFacebook, AiFillInstagram} from 'react-icons/ai'


export const Contact = () => {
    return (
        <div className='bg-[#2879fe] py-4'>
            <div className='flex max-w-3xl mx-auto justify-between text-white items-center'>
                <h2 className='text-md font-bold uppercase'>Be In touch with us:</h2>
                <div>
                    <input
                        type="text"
                        className='rounded-tl rounded-bl p-1 px-2 text-black max-w-[200px]
                         border-none focus:outline-none text-md'
                        placeholder='Enter your email'
                    />
                    <button className='bg-gray-800 py-1 px-2 text-white rounded-tr rounded-br'>JOIN US</button>
                </div>
                <div className='flex gap-2 text-xl'>
                    <BsPinterest className='cursor-pointer'/>
                    <AiFillGoogleCircle className='cursor-pointer'/>
                    <AiFillTwitterCircle className='cursor-pointer'/>
                    <AiFillFacebook className='cursor-pointer'/>
                    <AiFillInstagram className='cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};