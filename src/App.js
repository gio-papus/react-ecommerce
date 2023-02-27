
import './App.css';
import React,{useState} from 'react';
import { List } from './components/List';
import initialProducts from './assets/db';
import Header  from './components/Header';
import "./components/page.css"
import Checkout from './components/Checkout';

function App() {
  
  const[products,setProducts]=useState(initialProducts);
  return (
 <>
 <div className='all__header'>
  <Header/>
  </div>
 <div className='all__items'> 
  <List products={products}/>
  <Checkout />
  </div>
 </>
  );
}

export default App;
