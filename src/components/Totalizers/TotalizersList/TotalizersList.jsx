/* React */
import React from 'react'

/* Libs */
import { connect } from 'react-redux'

/* Custom components */
import Card from '../../UI/Card/Card';
import TotalizersItem from '../TotalizersItem/TotalizersItem';

const TotalizersList = ({ totalizers }) => {
  const items = [
    {
      name: 'Produtos',
      price: totalizers.subTotal,
      highlight: false,
    },
    {
      name: 'Frete',
      price: totalizers.shippingTotal,
      highlight: false,
    },
    {
      name: 'Desconto',
      price: -totalizers.discount,
      highlight: false,
    },
    {
      name: 'Total',
      price: totalizers.total,
      highlight: true,
    },
  ]

  return (
    <Card transparent>
      {items.map((totalizer, index) =>
        <TotalizersItem
          key={index}
          name={totalizer.name}
          price={totalizer.price}
          highlight={totalizer.highlight}
        />
      )}
    </Card>
  )
}

const mapStateToProps = state => ({
  totalizers: state.cart.totalizers,
})

export default connect(mapStateToProps)(TotalizersList)
