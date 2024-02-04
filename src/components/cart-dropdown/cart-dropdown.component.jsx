import React from 'react'
import './cart-dropdown.styles.scss'
import Button from '../button/button.componets'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
        <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown;