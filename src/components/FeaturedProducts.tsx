import React from 'react';
import {FeatureProductCard} from "./FeatureProductCard";

type FeaturedProductsProps = {
    type: 'Featured Products' | 'Trending Products'
}

export const FeaturedProducts = ({type}: FeaturedProductsProps) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Skirt',
            oldPrice: 15,
            price: 10,
            isNew: true,
            type: 'hat'
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Skirt',
            oldPrice: 15,
            price: 10,
            isNew: true,
            type: 'tshirt'
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Skirt',
            oldPrice: 15,
            price: 10,
            type: 'hat'
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: 'Skirt',
            oldPrice: 15,
            price: 10,
            type: 'hat'
        }
    ]

    return (
        <div className='max-w-7xl mx-auto pt-20 pb-10'>
            <div className='flex justify-between items-center mb-10'>
                <h2 className={`text-3xl font-bold ${type === 'Featured Products' ? 'order-0' : 'order-1'}`}>{type}</h2>
                <p className='max-w-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
                    blanditiis cupiditate eos
                    impedit in laboriosam maiores repellendus. A, beatae consequuntur debitis, dolorem maxime nulla
                    numquam omnis optio quia, rem voluptatum!</p>
            </div>

            <div className='flex justify-center gap-10 px-32'>
                {data.map(product => (
                        <FeatureProductCard key={product.id} {...product}/>
                    )
                )}
            </div>

        </div>
    );
};