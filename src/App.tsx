import { useState } from 'react'

import './App.css'
import ProductListing from './ProductListing'
import Cart from './Cart'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <>
      <ProductListing setCartItems={setCartItems} cartItems={cartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </>
  )
}

export default App
