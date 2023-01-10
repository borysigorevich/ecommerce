import React, {useState, useEffect} from 'react';
import type {ChangeEvent} from 'react'
import {useParams} from 'react-router-dom'
import {FeatureProductCard, FeatureProductType} from "../components";
import {useDebounce, useFetch} from "../hooks";

export type CategoriesType = {
    attributes: {
        title: string
        products: {
            data: FeatureProductType[]
        }
    }
    id: number
}

export const Products = () => {
    const id = Number(useParams().id)

    const [maxPrice, setMaxPrice] = useState(1000)
    const [maxPriceDebounce, setMaxPriceDebounce] = useState(1000)
    const [sort, setSort] = useState('asc')
    const [filters, setFilters] = useState<string[]>([])

    const sortBy = (event: ChangeEvent<HTMLInputElement>) => setSort(event.target.value)
    const filterBy = (event: ChangeEvent<HTMLInputElement>) => {
        const filterValue = event.target.value
        const isChecked = event.target.checked

        setFilters(isChecked
            ? [...filters, filterValue]
            : prev => prev.filter(category => category !== filterValue)
        )
    }

    useDebounce(() => {
        setMaxPriceDebounce(maxPrice)
    }, [maxPrice], 500)

    const changePrice = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value))
    }

    const [categories, catLoading, catError] = useFetch(`/sub-categories?populate=*&[filters][categories][id][$eq]=${id}`)
    const [products, productsLoading, productsError] = useFetch(
        `/products?populate=*&[filters][categories][id][$eq]=${id}
        ${filters.map(subCat => `&[filters][sub_categories][id][$eq]=${subCat}`)}&[filters][price][$lte]=${maxPriceDebounce}&sort[0]=price:${sort}`)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
        <div className='grid grid-cols-[1fr_4fr] px-16 gap-36 pt-16 min-h-[calc(100vh-160px)]'>

            <div>
                <div className='grid mb-6'>
                    <h2 className='text-2xl mb-2'>Product Categories</h2>
                    {(categories as CategoriesType[]).map(category => (
                        <label key={category.id} className='w-fit relative pl-5'>
                            <input onChange={filterBy} className='appearance-none' type="checkbox" value={category.id}/>
                            <span className='absolute w-4 h-4 border block
                         top-1/2 -translate-y-1/2 left-0 rounded-full grid place-content-center
                         before:w-2 before:h-2 border-[#2879fe] before:rounded-full before:bg-[#2879fe] before:transition-all'
                            />
                            <span className='select-none'>{category.attributes.title}</span>
                        </label>
                    ))}
                </div>

                <div className='mb-6'>
                    <h2 className='mb-2 text-2xl'>Filter By Price</h2>
                    <div className='flex items-center gap-3'>
                        <span className='text-sm font-semibold'>0</span>
                        <input
                            type="range"
                            min={0}
                            max={1000}
                            onChange={changePrice}
                            value={maxPrice}
                        />
                        <span className='text-sm font-semibold'>{maxPrice}</span>
                    </div>
                </div>

                <div>
                    <h2 className='mb-2 text-2xl'>Sort By</h2>

                    <div className='grid gap-2'>
                        <label className='flex gap-2'>
                            <input type="radio" name='sort' defaultChecked value='asc' onChange={sortBy}/>
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


                <div className='flex gap-10'>
                    {(products as FeatureProductType[])?.map(product => (
                            <FeatureProductCard key={product.id} {...product}/>
                        )
                    )}

                </div>
            </div>

        </div>
    );
};