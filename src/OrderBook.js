import R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'

// Defaults
import * as getters from './defaults/getters'
// import * as renderers from './defaults/renderers'

// Components
import FintechUIParent from './components/FintechUIParent'
import FintechUIHeader from './components/FintechUIHeader'
import FintechUIContent from './components/FintechUIContent'

const unsafePropNames = [
  'asks',
  'bids',
  'depth',
  'headerText',
  'sizeLabel',
  'priceLabel',
  'positionLabel',
  'getSize',
  'getPrice',
  'getPosition'
]

class OrderBook extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = { hasScrolled: false }
    this.centerSpread = this.centerSpread.bind(this)
  }

  centerSpread () {
    console.log('scroll so that spread is centered')
  }

  render () {
    const { headerText } = this.props
    return (
      <FintechUIParent {...R.omit(unsafePropNames, this.props)}>
        <FintechUIHeader>{headerText}</FintechUIHeader>
        <FintechUIContent>
          {/* <Spread onClick={centerSpread} /> */}
        </FintechUIContent>
      </FintechUIParent>
    )
  }
}

OrderBook.propTypes = {
  asks: PropTypes.array,
  bids: PropTypes.array,
  depth: PropTypes.number,
  headerText: PropTypes.string,
  sizeLabel: PropTypes.string,
  priceLabel: PropTypes.string,
  positionLabel: PropTypes.string,
  getSize: PropTypes.func,
  getPrice: PropTypes.func,
  getPosition: PropTypes.func
}

OrderBook.defaultProps = {
  asks: [],
  bids: [],
  depth: 50,
  headerText: 'Order Book',
  sizeLabel: 'Market Size',
  priceLabel: 'Price (USD)',
  positionLabel: 'My Size',
  getSize: getters.getSize,
  getPrice: getters.getPrice,
  getPosition: getters.getPosition
}

export default OrderBook