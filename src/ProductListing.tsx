import { productItems } from "./data";
import { useState } from "react";
const ProductListing = ({ setCartItems, cartItems }) => {
    const [query, setQuery] = useState("");
    const [filteredItems, setFilteredItems] = useState(productItems);


    const handleChange = (e) => {
        const q = e.target.value;
        setQuery(q);
        setFilteredItems(
            productItems.filter((item) => item.name.toLowerCase().includes(q.toLowerCase()))
        );
    };

    const handleAddToCart = (item) => {
        const isAleadyInCart = cartItems.find((cartItem) => cartItem.id === item.id);
        if (isAleadyInCart) {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                }
                return cartItem
            })
            setCartItems(updatedCartItems)
        } else {
            setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
        }
    }
    return (
        <>
            <input onChange={handleChange} value={query} />
            <div>
                <h2>Product Listing</h2>
                {filteredItems?.map((el) => {
                    return (
                        <div key={el.id} style={{ backgroundColor: "#ffff33" }}>
                            <p>{el.name}</p>
                            <p>{el.price}</p>
                            <button onClick={() => handleAddToCart(el)}>Add to Cart</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductListing;
