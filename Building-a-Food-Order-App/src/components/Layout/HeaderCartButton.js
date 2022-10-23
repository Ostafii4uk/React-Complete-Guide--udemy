import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (porps) => {
  const cartCtx = useContext(CartContext)

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  return (
    <button className={classes.button} onClick={porps.onClick}>
      <span className={classes.icon}>
        <CardIcon />
      </span>
      <span>
        Your cart
      </span>
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton