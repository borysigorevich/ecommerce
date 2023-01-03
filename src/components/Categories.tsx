import React from 'react';
import {Link} from 'react-router-dom'

export const Categories = () => {


    return (
        <div className='h-[80vh] px-3 grid grid-cols-4 grid-rows-2 gap-3 pb-10'>
            <div className='cursor-pointer relative overflow-hidden group'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>

            <div className='cursor-pointer relative overflow-hidden group row-span-2'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>

            <div className='cursor-pointer relative overflow-hidden group'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>

            <div className='cursor-pointer relative overflow-hidden group'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>

            <div className='cursor-pointer relative overflow-hidden group'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>

            <div className='cursor-pointer relative overflow-hidden group col-span-2'>
                <Link to='/products/1'>
                    <img
                        className='h-full object-cover group-hover:scale-125 transition duration-300 w-full'
                        src="https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""/>
                    <span
                        className='group-hover:bg-[#2879fe] group-hover:text-white transition absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 text-sm font-bold'>SALE</span></Link>
            </div>


        </div>
    );
};