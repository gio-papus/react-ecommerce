import React from 'react'
import "./item.css"
import Count from './Count'

export const Item = ({product}) => {
  
  return (
    <div className='grid'>
        <div className='items__div' key={product.id}>
          
          <img className="items__img" src={product.img} alt="none"></img>  
          
          <h3 className='products__title'>{product.title}</h3>
          <h4 className='items__price'>{product.price}</h4>
          <Count/>
          <button>Buy</button>
        </div>
    </div>
  )
}
 export default Item