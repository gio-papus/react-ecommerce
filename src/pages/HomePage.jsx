import React from 'react'
import Header from '../components/Header'
import ItemList from '../components/ItemList'
import { useState } from 'react';
import initialProducts from '../db/data';

function HomePage() {
  const[products,setProducts]=useState(initialProducts)
  return(
    <>
    <Header/>
   <div style={{
    display:"grid",
    gridTemplateColumns:"auto auto"
  }}>
    {
      products.map((product)=>{
        return <ItemList key={product.id} id={product.id} price ={product.price} title={product.title} img={product.img} />
      })
    }
  </div>
  </>
  
)}

export default HomePage