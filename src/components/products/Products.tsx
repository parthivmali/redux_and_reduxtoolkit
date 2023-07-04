import React, { useEffect, useState } from 'react'
import Search from './Search'
import Filter from './Filter'
import Cart from './Cart.'
import REACT_APP_API_URL from '../../config';


const Products = () => {
    const [products,setProducts] = useState([])
    const [filterProduct,setFilterProduct] = useState([])

    const getApiData = async () => {
        const api = REACT_APP_API_URL
        const response = await fetch(`https://api.json-generator.com/templates/On3yViEMYNNF/data?access_token=${api}`)
        const data = await response.json()
        setProducts(data.products)
        setFilterProduct(data.products)   
    }


    useEffect(()=>{
        getApiData()
    },[])
  return (
    <>
        <div className='float-left w-full bg-lime-300'>
            <Search/>
        </div>
        <div className='float-left w-2/12 bg-gray-300'>
            <Filter/>
        </div>
        <div className='float-left w-6/12 bg-gray-500'>
            Products
        </div>
        <div className='float-left w-4/12'>
            <Cart/>
        </div>
    </>
  )
}

export default Products
