import React from 'react';

import {AiFillDelete} from 'react-icons/ai'
import {FeatureProductType} from "./FeatureProductCard";
import {useAppDispatch} from "../hooks";
import {removeProduct} from "../store/cartSlice";

export const CartItem = ({
                             id,
                             attributes: {img, title, desc, price},
                             totalCount
                         }: FeatureProductType & { totalCount: number }) => {
    const dispatch = useAppDispatch()

    const handleRemoveProduct = () => {
        dispatch(removeProduct(id))
    }

    return (
        <div className='grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b last:border-b-0 pb-2'>
            <div>
                <img
                    // src='https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600'
                    src={import.meta.env.VITE_STRAPI_UPLOAD_URL + img.data.attributes.url}
                    alt=""
                    className='w-20 h-28 object-cover'
                />
            </div>
            <div>
                <h2 className='text-xl mb-6 text-semibold text-gray-400'>{title}</h2>
                <p className='text-sm text-gray-400 leading-4 mb-2'>{desc}</p>
                <span className='text-[#2879fe] font-semibold'>{totalCount} X ${price}</span>
            </div>
            <div className='text-2xl text-red-500 cursor-pointer' onClick={handleRemoveProduct}>
                <AiFillDelete/>
            </div>
        </div>
    );
};