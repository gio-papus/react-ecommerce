
import './App.css';
import React,{useState} from 'react';
import { List } from './components/List';
import initialProducts from './assets/db';
import Header  from './components/Header';
import "./components/page.css"
import Checkout from './components/Checkout';
import Register from './components/Register';

function App() {
  
  const[products,setProducts]=useState(initialProducts);
  return (
 <>

  <Register/>
  <Header/>
 

  <List products={products}/>
  <Checkout />
  
 </>
  );
}

export default App;
