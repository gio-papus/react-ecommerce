import React,{useContext} from 'react'
import CartContext from '../context/CartContext'


function CartPage() {
  const {cart}=useContext(CartContext)
  


  return (
    <div>


    
  
    {
      cart.map(({id,title,price,img})=> {return( <div className='object__card--div'>
      <img className='img' src={img} alt=""/>
      <p>{title}</p>
      <p>{price}</p>
       
     
    <br></br>
    <p>X</p>
     
   </div>)}
      )
    }
    </div>
    
  )
}

export default CartPage