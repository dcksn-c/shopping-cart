import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { ShopContextProvider } from './context/shopContext';
import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <BrowserRouter>
          <NavBar />
          <AnimatedRoutes />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
