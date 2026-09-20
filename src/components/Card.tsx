import React from 'react'
import type{ Product } from '../type/type'

interface CardProps{
    selectedProduct:Product 
}

function Card({selectedProduct}:CardProps) {
    if(selectedProduct === null){
        return <h1>Selecet any product</h1>
    }
  return (
   <>
   <div>
       
            <div key={selectedProduct.id}>
                <img src={selectedProduct.image} alt={selectedProduct.title} />
                <h2>{selectedProduct.title}</h2>
                <h2>{selectedProduct.price}</h2>
                <h2>{selectedProduct.category}</h2>
               
            </div>

    
   </div>
   
   </>
  )
}

export default Card