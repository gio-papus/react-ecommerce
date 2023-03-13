import React,{useContext} from 'react'
import CartContext from '../context/CartContext'
import ItemList from '../components/ItemList'

function CartPage() {
  const {cart}=useContext(CartContext)

  return (
    <div>CartPage</div>

    
    // {cart.map(({id,title,price,img})=>{
    //     return (<ItemList key={id} id={id} title={title} img={img} price={price} />)
    //   })}
    
  );
}

export default CartPage