import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {Fiverr, Home, Product, Products} from "./pages";
import {Layout} from "./components";
import {persistor, store} from "./store";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/product/:id',
                element: <Product/>
            },
            {
                path: '/products/:id',
                element: <Products/>
            }
        ]
    },
    {
        path: '/fiverr',
        element: <Fiverr/>
    }
])

const stripePromise = loadStripe(import.meta.env.VITE_STRAPI_STRIPE_PUBLIC_KEY);

function App() {

    const options = {
        // passing the client secret obtained from the server
        clientSecret: import.meta.env.VITE_STRAPI_STRIPE_SECRET_KEY,
    };

    return (
        <div className='h-full'>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <RouterProvider router={router}/>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App
