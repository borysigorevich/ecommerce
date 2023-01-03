import React from 'react';

type FeatureProductType = {
    id: number
    img: string
    oldPrice: number
    price: number
    title: string
    isNew?: boolean
    type: string
}


export const FeatureProductCard = (product: FeatureProductType) => {

    return (
        <div>
            <div className='relative mb-3 group overflow-hidden'>
                {product.isNew &&
                    <span className='select-none absolute top-4 left-4 p-1 text-sm bg-white text-teal-600'>New Season</span>}
                <img className='w-full h-[400px] object-cover group-hover:hidden' src={product.img} alt={product.title}/>
                <img
                    className='w-full h-[400px] object-cover hidden group-hover:block'
                    src="https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt={product.title}
                />
            </div>

            <div>
                <h2 className='font-semibold '>{product.title}</h2>
                <div className='flex gap-3'>
                    <span className='text-gray-400 line-through'>${product.oldPrice}</span>
                    <span className='font-bold'>${product.price}</span>
                </div>
            </div>
        </div>
    );
};