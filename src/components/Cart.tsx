import React, {useState} from 'react';
import type {MouseEvent} from 'react'
import {BsFillCartFill} from "react-icons/bs";

import {AiFillCloseCircle} from 'react-icons/ai'

export const Cart = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = (event: MouseEvent) => {
        setIsMenuOpen(false)
    }

    return (
        <>
            <div className='flex items-center relative' onClick={openMenu}>
                <BsFillCartFill/>
                <span className='absolute -right-[12px] -top-[9px] w-[20px] h-[20px] rounded-full
                            bg-[#2879fe] -top-[10px] text-white grid place-content-center text-sm'>0</span>
            </div>
            <div
                className={`fixed z-10 inset-0 ${isMenuOpen ? 'backdrop-blur' : ''} ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                onClick={closeMenu}
            >
                <div
                    onClick={event => event.stopPropagation()}
                    className={`absolute z-10 top-0 ${isMenuOpen ? 'right-0' : '-right-full'} transition-all duration-300 bottom-0 w-[375px] bg-white p-6 border-l pointer-events-auto`}>
                    <div className='pb-4 border-b text-2xl  text-[#2879fe]' >
                        <AiFillCloseCircle className='cursor-pointer' onClick={closeMenu}/>
                    </div>
                </div>
            </div>
        </>
    );
};