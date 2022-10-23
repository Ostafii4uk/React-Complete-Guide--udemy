import { useReducer } from 'react'
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updetedItems = state.items.concat(action.item)
    const updetedTotalAmount = state.totalAmount + action.item.price * action.item.mount

    return {
      items: updetedItems,
      totalAmount: updetedTotalAmount
    }
  }
  return defaultCartState;
}

const CartProvider = props => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartState({
      type: 'ADD',
      item: item
    })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartState({
      type: 'REMOVE',
      id: id
    })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;