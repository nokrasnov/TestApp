import React, { Component } from 'react'
import { Animated, Easing } from 'react-native'
import PropTypes from 'prop-types'

import styles from './BetCardAnimationStyles'
import {getScreenDimensions} from '../../Services/Utils'

const screenSize = getScreenDimensions()

export const CARD_STATE = {
  WAITING: 'waiting',
  APPEARING: 'appearing',
  DISPLAYING: 'displaying',
  ENDING: 'ending'
}
const APPEARING_TIME = 300
const HIDING_TIME = 500

export default class BetCardAnimation extends Component {
  static propTypes = {
    children: PropTypes.element,
    cardState: PropTypes.string,
    onHideCard: PropTypes.func
  };

  constructor (props) {
    super(props)

    this.state = {
      cardOpacity: new Animated.Value(1),
      cardYPosition: new Animated.Value(screenSize.height)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.cardState !== this.props.cardState) {
      this.setViewPosition()
    }
  }

  setViewPosition () {
    const {cardState} = this.props

    let newCardOpacity = 1
    let newPositionY = 0
    if (cardState === CARD_STATE.WAITING) {
      newPositionY = screenSize.height
    }
    if (cardState === CARD_STATE.ENDING) {
      newCardOpacity = 0
    }

    Animated.timing(this.state.cardOpacity, {
      duration: HIDING_TIME,
      easing: Easing.inOut(Easing.quad),
      toValue: newCardOpacity,
      useNativeDriver: true
    }).start()
    Animated.timing(this.state.cardYPosition, {
      duration: APPEARING_TIME,
      easing: Easing.inOut(Easing.quad),
      toValue: newPositionY,
      useNativeDriver: true
    }).start()

    if (cardState === CARD_STATE.ENDING) {
      setTimeout(() => {
        this.onHideCard()
      }, HIDING_TIME)
    }
  }

  onHideCard () {
    this.setState({
      cardYPosition: new Animated.Value(screenSize.height)
    })
    this.props.onHideCard()
  }

  render () {
    const {cardOpacity, cardYPosition} = this.state

    const cardContainerStyle = {
      opacity: cardOpacity,
      transform: [{
        translateY: cardYPosition
      }]
    }

    return (
      <Animated.View style={[styles.container, cardContainerStyle]}>
        {this.props.children}
      </Animated.View>
    )
  }
}
