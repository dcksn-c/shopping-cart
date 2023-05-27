import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/shopContext';
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/shopping-cart' element={<Home />}/>
            <Route path='/shop' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
