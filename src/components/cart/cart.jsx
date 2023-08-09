import React from 'react'
import { totalPrice } from '../../units/total-price'
import Button from '../button/button'
import './cart.css'

function cart({cartItems,oncheckout}) {

  return (
    <div className='cart__container'>
        <p>Umimiya narx {totalPrice(cartItems).toLocaleString("en-US", {
                style: 'currency',
                currency: 'USD'})}</p>
        <Button title={`${cartItems.length === 0 ? 'buyurtma berish' : "Tolov"}`} onClick={()=> oncheckout()} disable={cartItems.length === 0 ? true : false} type={'checkout'}/>
    </div>
  )
}

export default cart