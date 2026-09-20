import React, { useEffect, useState } from 'react'
import "../App.css"
import Card from "./Card"
import type{ Product } from '../type/type'
function ApiI() {
const [products,setProducts]=useState<Product[]>([])
const [selectedProduct,setSelectedProduct]=useState<Product | null>(null)
useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data => setProducts(data))
},[])
// console.log(products);
//console.log(selectedProduct);
  return (
    <>
    <div className="main">
        <div className="left">
    {
        products.map((product=>(
            <div key={product.id} className='product'>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
                <h2>{product.category}</h2>
                <button onClick={()=>setSelectedProduct(product)}>open</button>
            </div>
        )))
    }
        </div>
        <div className="right">
        <Card selectedProduct={selectedProduct}/>
        </div>
    </div>
    
    
    
    </>
  )
}

export default ApiI