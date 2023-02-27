import React from 'react';
import Item from './Item';

export const List = ({products}) => {
  return (
    <ul>
        { products.map((product) =>(
            <Item key={product.id} product={product}/>
            ))}
        
    </ul>
  )
}

export default List;