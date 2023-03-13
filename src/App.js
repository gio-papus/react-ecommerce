import Routers from './routes/Routers';
import CartProvider from './context/CartProvider';
import './App.css';


function App() {

  return (
    <div className="App">
      <header className="App-header">

        <CartProvider>

        <Routers/>
        
        </CartProvider>

      </header>
    </div>
  );
}

export default App;
