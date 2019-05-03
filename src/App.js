import React, { Component } from 'react';
import Loadable from 'react-loadable'
import { Switch, Route, Redirect } from 'react-router-dom';
import PageLoading from './containers/PageLoading/PageLoading';

const AsyncCheckoutPage = Loadable({
  loader: () => import('./containers/CheckoutPage/CheckoutPage'),
  loading: PageLoading,
})

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/checkout/" component={AsyncCheckoutPage} />
          <Redirect path="/" to="/checkout" />
        </Switch>
      </div>
    );
  }
}

export default App;
