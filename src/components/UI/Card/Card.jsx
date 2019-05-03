import React from 'react'
import withStyles from 'react-jss'

const Card = ({
  classes,
  transparent,
  className,
  children,
  ...props,
}) => {
  const appliedClasses = [classes.card]

  appliedClasses.push(transparent ? classes.transparent : classes.white)

  if (className)
    appliedClasses.push(className)

  return (
    <div className={appliedClasses.join(' ')} {...props}>
      {children}
    </div>
  )
}

const styles = {
  card: {
    borderRadius: 3,
    margin: {
      bottom: 20,
    },
    padding: [12, 10],
  },
  transparent: {
    border: {
      width: 1,
      style: 'solid',
      color: '#CCC',
    },
  },
  white: {
    backgroundColor: '#ffffff',
    boxShadow: {
      x: 1,
      y: 1,
      blur: 5,
      color: 'rgba(0,0,29,0.22)',
    },
  },
}

export default withStyles(styles)(Card)
