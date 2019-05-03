/* React */
import React from 'react'

/* Libs */
import { connect } from 'react-redux'

/* Custom components */
import CartItem from '../CartItem/CartItem';

export const CartItemList = ({ items }) =>
  <div>
    {items.map(item =>
      <CartItem
        key={item.product.sku}
        name={item.product.name}
        thumb={item.product.imageObjects[0].thumbnail}
        price={item.product.priceSpecification.price}
      />
    )}
  </div>

const mapStateToProps = state => ({
  items: state.cart.cartItems,
})

export default connect(mapStateToProps)(CartItemList)
