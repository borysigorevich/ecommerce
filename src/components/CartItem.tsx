import React from 'react';

import {AiFillDelete} from 'react-icons/ai'

export const CartItem = () => {
    return (
        <div className='grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b last:border-b-0 pb-2'>
            <div>
                <img
                    src='https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    alt=""
                    className='w-20 h-28 object-cover'
                />
            </div>
            <div>
                <h2 className='text-xl mb-6 text-semibold text-gray-400'>Long Sleeve Graphic T-shirt</h2>
                <p className='text-sm text-gray-400 leading-4 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate deleniti excepturi quisquam
                    rerum sequi.</p>
                <span className='text-[#2879fe] '>1 X $19.99</span>
            </div>
            <div className='text-2xl text-red-500 cursor-pointer'>
                <AiFillDelete/>
            </div>
        </div>
    );
};