
import './App.css';
import React,{ useState} from 'react';
import { List } from './components/List';
import initialProducts from './assets/db';
import Header  from './components/Header';
import "./components/page.css"
import Checkout from './components/Checkout'
import { CountContext } from './CountContext';
function App() {
  
  const[count,setCount]=useState(0);
  const[products]=useState(initialProducts);
  return (
 <CountContext.Provider value={[count,setCount]}>

  <Header/>
<div className='grid'>
 

  <List products={products}/>
  <Checkout />
  </div>
 </CountContext.Provider>
  );
}

export default App;
