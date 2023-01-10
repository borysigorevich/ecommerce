import {useTimeout} from './index'
import {useEffect} from "react";

export const useDebounce = (callback: Function, dependencies: any[], delay: number) => {
    const {clear, reset} = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}