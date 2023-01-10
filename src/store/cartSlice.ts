import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FeatureProductType} from "../components";

const initialState: {
    products: {
        [key: string]: FeatureProductType & { totalCount: number }
    },
    totalCount: number
} = {
    products: {},
    totalCount: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, {payload}: PayloadAction<FeatureProductType>) => {
            const productId = payload.id
            state.products[productId]
                ? state.products[productId].totalCount++
                : state.products[productId] = {
                    ...payload,
                    totalCount: 1
                }

            state.totalCount++
        },
        subtractProduct: (state, {payload}: PayloadAction<number>) => {
            const productId = payload
            const product = state.products[productId]

            product.totalCount === 1
                ? delete state.products[productId]
                : product.totalCount--

            state.totalCount > 0 && state.totalCount--

        },
        removeProduct: (state, {payload}: PayloadAction<number>) => {
            delete state.products[payload]
            state.totalCount = 0
        },
        resetCart: (state) => {
            for (const productId in state.products) {
                delete state.products[productId]
            }
            state.totalCount = 0
        }
    }
})

export const {addProduct, subtractProduct, removeProduct, resetCart} = cartSlice.actions

export default cartSlice.reducer