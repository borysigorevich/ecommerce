import React, {useState, useEffect} from 'react';
import type {MouseEvent} from 'react'
import {BsFillCartFill} from "react-icons/bs";

import {AiFillCloseCircle} from 'react-icons/ai'
import {CartItem} from "./CartItem";
import {useAppDispatch, useAppSelector} from "../hooks";
import {FeatureProductType} from "./FeatureProductCard";
import {resetCart} from "../store/cartSlice";
import {loadStripe} from "@stripe/stripe-js";
import {makeRequest} from "../makeRequest";

type Numbers = number[]

const stripePromise = loadStripe(import.meta.env.VITE_STRAPI_STRIPE_PUBLIC_KEY);

export const Cart = () => {
    const productsState = useAppSelector(state => state.products)
    const totalCount = useAppSelector(state => state.totalCount)
    const dispatch = useAppDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const items = Object.values(productsState)
    const subtotal = Object.values(items).reduce((acc, next) => {
        return (next.totalCount * next.attributes.price) + acc
    }, 0)

    const asc = (left: Numbers = [], right: Numbers = []): Numbers => {
        let sortedArr = []

        while (left.length && right.length) {
            if (left[0] < right[0]) sortedArr.push(left.shift() as number)
            else sortedArr.push(right.shift() as number)
        }

        return [...sortedArr, ...left, ...right].filter(Boolean)
    }

    const merge = (arr: Numbers): Numbers => {
        if (arr.length < 2) return arr

        const mid = Math.floor(arr.length / 2)

        const left = arr.slice(0, mid)
        const right = arr.slice(mid)

        return asc(merge(left), merge(right))
    }

    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)

    const handleResetCart = () => dispatch(resetCart())

    const handlePayment = async (event: MouseEvent) => {
        event.preventDefault()
        try {
            const stripe = await stripePromise

            const res = await makeRequest.post('/orders', {
                products: items
            })
            console.log({res})
            await stripe!.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            })
        } catch (error) {

        }
    }

    useEffect(() => {

        const listener = (event: KeyboardEvent) => event.key === 'Escape' && isMenuOpen && setIsMenuOpen(false)

        window.addEventListener('keydown', listener, false)

        return () => window.removeEventListener('keydown', listener, false)

    }, [isMenuOpen])

    return (
        <>
            <div className='flex items-center relative cursor-pointer' onClick={openMenu}>
                <BsFillCartFill/>
                <span className='absolute -right-[12px] -top-[9px] w-[20px] h-[20px] rounded-full
                            bg-[#2879fe] -top-[10px] text-white grid place-content-center text-sm'>{totalCount}</span>
            </div>
            <div
                className={`fixed z-10 inset-0 ${isMenuOpen ? 'backdrop-blur' : ''} ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
                onClick={closeMenu}
            >
                <div
                    onClick={event => event.stopPropagation()}
                    className={`absolute z-10 top-0 ${isMenuOpen ? 'right-0' : '-right-full'} transition-all
                    duration-300 bottom-0 w-[475px] bg-white p-6 border-l pointer-events-auto`}
                >
                    <div className='pb-4 border-b text-2xl  text-[#2879fe] mb-5'>
                        <AiFillCloseCircle className='cursor-pointer' onClick={closeMenu}/>
                    </div>

                    <h2 className='text-2xl font-semibold text-black text-gray-400 mb-4'>Products In Your Cart</h2>

                    <div className='grid gap-6 mb-10'>
                        {items.map((item: FeatureProductType & { totalCount: number }) => (
                            <CartItem key={item.id} id={item.id} totalCount={item.totalCount}
                                      attributes={{...item.attributes}}/>
                        ))}
                    </div>

                    <div className='grid gap-5'>
                        <div className='flex justify-between'>
                            <h2 className='uppercase text-xl font-semibold'>Subtotal</h2>
                            <span className='text-xl font-semibold'>${subtotal}</span>
                        </div>
                        <button
                            onClick={handlePayment}
                            className='py-2 px-5 bg-[#2879fe] text-white uppercase font-semibold max-w-[250px]'>proceed
                            to checkout
                        </button>
                        <span onClick={handleResetCart} className='text-red-500 text-sm font-semibold cursor-pointer'>Reset Cart</span>
                    </div>
                </div>

            </div>
        </>
    );
};