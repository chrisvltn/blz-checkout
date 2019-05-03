/* React */
import React, { Component } from 'react'

/* Libs */
import withStyles from 'react-jss'
import { withRouter } from 'react-router-dom';

/* Custom components */
import Card from '../../components/UI/Card/Card';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';

import CartItemList from '../../components/Cart/CartItemList/CartItemList';
import TotalizersList from '../../components/Totalizers/TotalizersList/TotalizersList';


class CartPage extends Component {
  goToPayment() {
    this.props.history.push('/checkout/payment')
  }

  render() {
    const {
      classes
    } = this.props

    return (
      <div className={classes.row}>
        <div className={classes.left}>
          <Title>Produtos</Title>
          <Card>
            <CartItemList />
          </Card>
        </div>

        <div className={classes.right}>
          <TotalizersList />
          <Button onClick={() => this.goToPayment()}>
            Seguir para o pagamento
          </Button>
        </div>
      </div>
    )
  }
}

const styles = {
  '@media (min-width: 1024px)': {
    row: {
      display: 'flex',
    },
    left: {
      width: '55%',
    },
    right: {
      flex: 'auto',
      padding: { left: 20 },
      margin: { top: 25 },
    },
  }
}

export default withStyles(styles)(withRouter(CartPage))
