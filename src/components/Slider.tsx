import React, {useState} from 'react';

import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'

export const Slider = () => {

        const [currentSlide, setCurrentSlide] = useState(0)

        const data = [
            "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
        ];

        const previous = () => setCurrentSlide(currentSlide === 0 ? 200 : prev => prev - 100)
        const next = () => setCurrentSlide(currentSlide === 200 ? 0 : prev => prev + 100)

        return (
            <div className='relative'>
                <div
                    className={`will-change-transform flex relative w-[300%] h-slider transition duration-300 -translate-x-${currentSlide}`}>
                    <img className='w-screen object-cover' src={data[0]} alt="picture 1"/>
                    <img className='w-screen object-cover' src={data[1]} alt="picture 2"/>
                    <img className='w-screen object-cover' src={data[2]} alt="picture 3"/>
                </div>

                <div
                    onClick={previous}
                    className='absolute bottom-32 left-[47%] p-2 border grid place-content-center cursor-pointer'
                >
                    <AiOutlineArrowLeft/>
                </div>

                <div
                    onClick={next}
                    className='absolute bottom-32 right-[47%] p-2 border grid place-content-center cursor-pointer'
                >
                    <AiOutlineArrowRight/>
                </div>
            </div>
        );
    }
;