/* React */
import React from 'react'

/* Libs */
import withStyles from 'react-jss'

const CartItem = ({
  classes,
  name,
  thumb,
  price,
}) =>
  <div className={classes.card}>
    <div className={classes.column + ' ' + classes.thumb}>
      <img src={thumb} alt={name} className={classes.thumb} />
    </div>
    <div className={classes.column}>
      <span className={classes.productName}>{name}</span>
      <span className={classes.productPrice}>R$ {price.toFixed(2).replace('.', ',')}</span>
    </div>
  </div>

const styles = {
  card: {
    display: 'flex',
    padding: [12, 5],
    borderRadius: 3,
    margin: { bottom: 15 },
    border: {
      width: 1,
      style: 'solid',
      color: '#EEE',
    },
    '&:last-child': {
      margin: { bottom: 0 },
    }
  },
  column: {
    padding: [0, 5],
    '&:last-child': {
      flex: 'auto',
    }
  },
  thumb: {
    height: 65,
    width: 65,
  },
  productName: {
    display: 'block',
    lineHeight: '16px',
    fontSize: 13,
    color: '#212122',
    height: 32,
    overflow: 'hidden',
    margin: { bottom: 15 },
    textAlign: 'left',
  },
  productPrice: {
    display: 'block',
    color: '#212122',
    lineHeight: '17px',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
}

export default withStyles(styles)(CartItem)
