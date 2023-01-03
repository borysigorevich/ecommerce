import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Fiverr, Home, Product, Products} from "./pages";
import {Layout} from "./components";

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

function App() {

    return (
        <div className='h-full'>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
