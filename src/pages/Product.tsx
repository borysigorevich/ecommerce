import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'

import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {RiScalesFill} from 'react-icons/ri'

import {useAppDispatch, useAppSelector, useFetch} from "../hooks";
import {FeatureProductType} from "../components";
import {addProduct, subtractProduct} from "../store/cartSlice";

export const Product = () => {
    const id = useParams().id
    const productState = useAppSelector(state => state.products[id!])
    const dispatch = useAppDispatch()

    const [mainImg, setMainImg] = useState('https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600')
    const [images, setImages] = useState<string[]>([])

    const [product, loading, error] = useFetch(`/products/${id}?populate=*`)

    // const img = [
    //     'https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600',
    //     'https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600'
    // ]

    useEffect(() => {
        !loading && setImages([(product as FeatureProductType).attributes?.img.data.attributes.url, (product as FeatureProductType).attributes?.img2.data.attributes.url])
        !loading && setMainImg((product as FeatureProductType).attributes?.img.data.attributes.url)
    }, [loading])

    const changeImage = (newImage: string) => () => setMainImg(newImage)

    const addProductToCart = () => {
        product && dispatch(addProduct(product as FeatureProductType))
    }

    const subtractProductFromCart = () => {
        product && dispatch(subtractProduct(Number(id!)))
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div className='px-10 grid grid-cols-2 min-h-[calc(100vh - 160px)] pt-10 gap-10 mb-10'>

            <div className='grid grid-cols-[auto_1fr] gap-5'>

                <div className='grid gap-5 h-fit'>
                    {images.every(Boolean) && images.map(image => (
                            <img
                                className='cursor-pointer w-40 h-40 object-cover'
                                onClick={changeImage(image)}
                                key={image}
                                src={import.meta.env.VITE_STRAPI_UPLOAD_URL + image}
                                alt='images'
                            />
                        )
                    )}
                </div>

                <div>
                    <img className='h-full object-cover' src={import.meta.env.VITE_STRAPI_UPLOAD_URL + mainImg}
                         alt="main img"/>
                </div>

            </div>
            <div>

                <div className='grid gap-5 mb-6'>
                    <h2 className='text-3xl font-bold'>{(product as FeatureProductType).attributes?.title}</h2>
                    <span
                        className='text-2xl text-[#2879fe] font-semibold'>{(product as FeatureProductType).attributes?.price}</span>
                    <p className='text-gray-500 leading-5'>{(product as FeatureProductType).attributes?.desc}</p>
                </div>

                <div>
                    <div className='flex gap-2 items-center mb-8'>
                        <button
                            onClick={subtractProductFromCart}
                            className={`cursor-pointer w-10 h-10 bg-gray-200 grid place-content-center text-3xl
                            transition-all duration-300 disabled:bg-gray-50 ${productState?.totalCount && 'active:shadow-[1px_1px_5px_1px_rgba(0,_0,_0,_0.3)]'}`}
                            disabled={!productState?.totalCount}
                        >-</button>
                        <span className='text-xl text-semibold'>{productState ? productState.totalCount : 0}</span>
                        <button
                            onClick={addProductToCart}
                            className='cursor-pointer transition duration-300 active:shadow-[1px_1px_5px_1px_rgba(0,_0,_0,_0.3)] w-10 h-10 bg-gray-200 grid place-content-center text-xl'>+</button>
                    </div>

                    <button
                        className='flex justify-center items-baseline py-2 bg-[#2879fe] text-white px-14 gap-2 mb-6'>
                        <BsFillCartPlusFill/>
                        <span onClick={addProductToCart}>Add To Cart</span>
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