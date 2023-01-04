import React, {useState} from 'react';

import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {RiScalesFill} from 'react-icons/ri'

export const Product = () => {

    const [mainImg, setMainImg] = useState('https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600')
    const [items, setItems] = useState(0)

    const img = [
        'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]

    const changeImage = (newImage: string) => () => setMainImg(newImage)

    return (
        <div className='px-10 grid grid-cols-2 h-product pt-10 gap-10 mb-10'>

            <div className='grid grid-cols-[auto_1fr] gap-5'>

                <div className='grid gap-5 h-fit'>
                    {img.map(image => (
                            <img
                                className='cursor-pointer w-40 h-40 object-cover'
                                onClick={changeImage(image)}
                                key={image}
                                src={image}
                                alt='images'
                            />
                        )
                    )}
                </div>

                <div>
                    <img className='h-full object-cover' src={mainImg} alt="main img"/>
                </div>

            </div>
            <div>

                <div className='grid gap-5 mb-6'>
                    <h2 className='text-3xl font-bold'>Long Sleeve Graphic T-shirt</h2>
                    <span className='text-2xl text-[#2879fe] font-semibold'>$19.99</span>
                    <p className='text-gray-500 leading-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Delectus deleniti et eum maiores minus
                        non praesentium repellendus tempora voluptas voluptate!</p>
                </div>

                <div>
                    <div className='flex gap-2 items-center mb-8'>
                        <span
                            className='cursor-pointer w-10 h-10 bg-gray-200 grid place-content-center  text-3xl'>-</span>
                        <span className='text-xl text-semibold'>{items}</span>
                        <span
                            className='cursor-pointer w-10 h-10 bg-gray-200 grid place-content-center  text-xl'>+</span>
                    </div>

                    <button
                        className='flex justify-center items-baseline py-2 bg-[#2879fe] text-white px-14 gap-2 mb-6'>
                        <BsFillCartPlusFill/>
                        <span>Add To Cart</span>
                    </button>

                    <div className='flex gap-4 mb-14'>
                        <button className='flex gap-2 items-center text-[#2879fe] border border-[#2879fe] px-4 py-2'>
                            <AiOutlineHeart className='text-xl'/>
                            <span>Add To Wishlist</span>
                        </button>
                        <button className='flex gap-2 items-center text-[#2879fe] border border-[#2879fe] px-4 py-2'>
                            <RiScalesFill className='text-xl'/>
                            <span>Add To Compare</span>
                        </button>
                    </div>
                </div>

                <div>

                    <div className='grid gap-2 pb-6 border-b'>
                        <span className='text-gray-400 font-semibold'>Vendor: Polo</span>
                        <span className='text-gray-400 font-semibold'>Product Type: T-shirt</span>
                        <span className='text-gray-400 font-semibold'>Tag: T-shirt, Men, Top</span>
                    </div>
                    <div className='grid pt-6'>
                        <span className='uppercase pb-2 border-b text-gray-400 font-semibold'>Description</span>
                        <span className='uppercase pb-2 pt-2 border-b text-gray-400 font-semibold'>Additional Information</span>
                        <span className='uppercase pt-2 text-gray-400 font-semibold'>FAQ</span>
                    </div>

                </div>

            </div>

        </div>
    );
};