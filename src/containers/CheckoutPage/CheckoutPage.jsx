import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable'
import { connect } from 'react-redux'
import Axios from 'axios';

import { addProducts, startLoading, finishLoading, updateTotalizers } from '../../store/actions/cart';

import CartSteps from '../../components/CartSteps/CartSteps';
import Container from '../Container/Container';
import PageLoading from '../PageLoading/PageLoading';

const AsyncCartPage = Loadable({
  loader: () => import('../CartPage/CartPage'),
  loading: PageLoading,
})

const AsyncPaymentFormPage = Loadable({
  loader: () => import('../PaymentFormPage/PaymentFormPage'),
  loading: PageLoading,
})

const AsyncConfirmationPage = Loadable({
  loader: () => import('../ConfirmationPage/ConfirmationPage'),
  loading: PageLoading,
})

class CheckoutPage extends Component {
  async componentDidMount() {
    if (this.props.isLoaded) return

    // Load checkout information here, as it will be available in all checkout internal routes
    this.props.toggleLoading(true)
    const cart = await this.getCart()
    this.props.addProducts(cart.items)
    this.props.updateTotalizers(cart.subTotal, cart.shippingTotal, cart.discount, cart.total)
    this.props.toggleLoading(false)
  }

  async getCart() {
    const { data } = await Axios.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
    return data
  }

  render() {
    return (
      <div>
        <header>
          <CartSteps />
        </header>
        <Container>
          <Switch>
            <Route path="/checkout/cart" exact component={AsyncCartPage} />
            <Route path="/checkout/payment" component={AsyncPaymentFormPage} />
            <Route path="/checkout/placed" component={AsyncConfirmationPage} />
            <Redirect path="/checkout" to="/checkout/cart" />
          </Switch>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoaded: state.cart.loaded,
})

const mapDispatchToProps = dispatch => ({
  addProducts: products => dispatch(addProducts(products)),
  updateTotalizers: (subTotal, shippingTotal, discount, total) => dispatch(updateTotalizers(subTotal, shippingTotal, discount, total)),
  toggleLoading: isLoading => dispatch(isLoading ? startLoading() : finishLoading()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutPage))
