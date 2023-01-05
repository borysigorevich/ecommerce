import React from 'react';
import {Link} from 'react-router-dom'

export type FeatureProductType = {
   attributes: {
       img: {
           data: {
               attributes: {
                   url: string
               }
           }
       }
       img2: {
           data: {
               attributes: {
                   url: string
               }
           }
       }
       oldPrice?: number
       price: number
       title: string
       isNew?: boolean
       type: string
   }
   id: number
}

export const FeatureProductCard = (product: FeatureProductType) => {

    return (
        <Link to='/product/1'>
            <div className='relative mb-3 group overflow-hidden max-w-[200px]'>
                {product.attributes.isNew &&
                    <span
                        className='select-none absolute top-4 left-4 p-1 text-sm bg-white text-teal-600'>New Season</span>}
                <img className='w-full h-[400px] object-cover group-hover:hidden'
                     src={import.meta.env.VITE_STRAPI_UPLOAD_URL + product.attributes.img?.data.attributes.url}
                     alt={product.attributes.title}/>
                <img
                    className='w-full h-[400px] object-cover hidden group-hover:block'
                    src={import.meta.env.VITE_STRAPI_UPLOAD_URL + product.attributes.img2?.data.attributes.url}
                    alt={product.attributes.title}
                />
            </div>

            <div>
                <h2 className='font-semibold '>{product.attributes.title}</h2>
                <div className='flex gap-3'>
                    <span className='text-gray-400 line-through'>${product.attributes.oldPrice}</span>
                    <span className='font-bold'>${product.attributes.price}</span>
                </div>
            </div>
        </Link>
    );
};