/* React */
import React from 'react'

/* Libs */
import withStyles from 'react-jss'

/* Components */
import { Link } from 'react-router-dom';

/* Custom components */
import Spinner from '../../components/UI/Spinner/Spinner';

const PageLoading = ({
  classes,
  isLoading,
  error,
}) => {
  const element = isLoading ?
    <div className={classes.spinner}>
      <Spinner />
    </div> :
    error ?
      <>
        <h2 className={classes.title}>Error :(</h2>
        <h3 className={classes.details}>Sorry, but the page couldn't be loaded. Please try again in a few seconds</h3>
        <Link to="/" className={classes.link}>Go back to cart</Link>
      </>
      : null

  return (
    <div className={classes.wrapper}>
      {element}
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
    textAlign: 'center',
    padding: [20, 0],
  },
  title: {
    fontSize: 46,
    lineHeight: 1,
    margin: { bottom: 20 },
  },
  details: {
    fontSize: 16,
    color: '#BDBDBD',
    fontWeight: 'normal',
    margin: { bottom: 20 },
  },
  link: {
    fontSize: 18,
    lineHeight: 1,
    color: '#BDBDBD',
    textDecoration: 'underline'
  },
  spinner: {
    fontSize: 34,
  }
}

export default withStyles(styles)(PageLoading)
