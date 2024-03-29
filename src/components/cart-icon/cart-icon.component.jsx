import {useContext} from 'react'
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { cartContex } from '../../contexts/cart.context';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(cartContex);

  const toggleisCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className='cart-icon-container' onClick={toggleisCartOpen}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
        </div>
  )
}

export default CartIcon;