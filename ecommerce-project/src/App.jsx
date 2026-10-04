import axios from 'axios';
import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { HomePage } from './Pages/home/HomePage.jsx';
import { CheckoutPage } from './Pages/checkout/CheckoutPage.jsx';
import { OrderPage } from './Pages/orders/OrdersPage.jsx';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }
      fetchAppData();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage />} cart={cart} />
    </Routes>
  );
}

export default App;
