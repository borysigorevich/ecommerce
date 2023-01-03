import React, {ChangeEvent, useState} from 'react';
import {useParams} from 'react-router-dom'
import {FeatureProductCard} from "../components";

export const Products = () => {
    const id = Number(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState('asc')
    const [filter, setFilter] = useState<string[]>([])

    const sortBy = (event: ChangeEvent<HTMLInputElement>) => setSort(event.target.value)
    const filterBy = (event: ChangeEvent<HTMLInputElement>) => {
        const filterValue = event.target.value
        if (filter.includes(filterValue)) {
            setFilter(prev => prev.filter(value => value !== filterValue))
        } else setFilter(prev => [...prev, event.target.value])
    }

    console.log(filter)

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
        <div className='grid grid-cols-[1fr_4fr] px-16 gap-36 pt-16'>

            <div>
                <div className='grid mb-6'>
                    <h2 className='text-2xl mb-2'>Product Categories</h2>
                    <label className='w-fit relative pl-5'>
                        <input onChange={filterBy} className='appearance-none' type="checkbox" value='hat'/>
                        <span className='absolute w-4 h-4 border block
                         top-1/2 -translate-y-1/2 left-0 rounded-full grid place-content-center
                         before:w-2 before:h-2 border-[#2879fe] before:rounded-full before:bg-[#2879fe] before:transition-all'
                        />
                        <span className='select-none'>hat</span>
                    </label>
                    <label className='w-fit relative pl-5'>
                        <input onChange={filterBy} className='appearance-none' type="checkbox" value='tshirt'/>
                        <span className='absolute w-4 h-4 border block
                         top-1/2 -translate-y-1/2 left-0 rounded-full grid place-content-center
                         before:w-2 before:h-2 border-[#2879fe] before:rounded-full before:bg-[#2879fe] before:transition-all'
                        />
                        <span className='select-none'>tshirt</span>
                    </label>
                </div>

                <div className='mb-6'>
                    <h2 className='mb-2 text-2xl'>Filter By Price</h2>
                    <div className='flex items-center gap-3'>
                        <span className='text-sm font-semibold'>0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={(event) => setMaxPrice(Number(event.target.value))}
                            value={maxPrice}
                        />
                        <span className='text-sm font-semibold'>{maxPrice}</span>
                    </div>
                </div>

                <div>
                    <h2 className='mb-2 text-2xl'>Sort By</h2>

                    <div className='grid gap-2'>
                        <label className='flex gap-2'>
                            <input type="radio" name='sort' value='asc' onChange={sortBy}/>
                            <span>Lowest Price</span>
                        </label>
                        <label className='flex gap-2'>
                            <input type="radio" name='sort' value='desc' onChange={sortBy}/>
                            <span>Highest Price</span>
                        </label>
                    </div>
                </div>
            </div>

            <div>

                <div className='mb-10'>
                    <img
                        className="h-72 w-full object-cover"
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>


                <div className='flex justify-between gap-10'>
                    {data.map(product => (
                            <FeatureProductCard key={product.id} {...product}/>
                        )
                    )}
                </div>
            </div>

        </div>
    );
};