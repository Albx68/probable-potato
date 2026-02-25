
const Cart = ({ cartItems, setCartItems }) => {

    if (cartItems.length === 0) {
        return <div>Cart is empty</div>
    }
    const increaseQuantity = (item) => {
        const increasedItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            }
            return cartItem
        })
        setCartItems(increasedItems)
    }

    const decreaseQuantity = (item) => {

        if (item.quantity === 1) {
            setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
            return;
        }
        const decreasedItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity ? cartItem.quantity - 1 : 0 }
            }
            return cartItem
        })
        setCartItems(decreasedItems)
    }

    const totalCost = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)

    return (
        <div>
            <h2>Cart</h2>

            {cartItems?.map((el) => {
                return (
                    <div key={el.id} style={{ backgroundColor: 'green' }}>
                        <p>{el.price}</p>
                        <p>{el.name}</p>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                            <button onClick={() => decreaseQuantity(el)}>-</button>
                            <p>{el.quantity || 1}</p>
                            <button onClick={() => increaseQuantity(el)}>+</button>
                        </div>
                        <button onClick={() => setCartItems(cartItems.filter(item => item.id !== el.id))}>Remove From Cart</button>
                    </div>

                )
            }
            )}
            <h3>Total Cost: Rs. {totalCost}</h3>
        </div>

    )
}

export default Cart