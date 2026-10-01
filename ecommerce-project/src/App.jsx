import { Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage.jsx'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrderPage } from './Pages/OrdersPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element = {<HomePage />} />
      <Route path="checkout" element = {<CheckoutPage />} />
      <Route path="orders" element = {<OrderPage />} />
    </Routes>
      
    
  )
}

export default App
