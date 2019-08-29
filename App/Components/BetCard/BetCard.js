import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Emoji from 'react-native-emoji'

// Styles
import styles from './BetCardStyles'

const PLAYER_PHOTO = require('./player.jpeg')

export default class BetCard extends Component {
  static propTypes = {
    bet: PropTypes.object,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func
  };

  decline = () => {
    this.props.onDecline()
  };

  accept = () => {
    this.props.onAccept()
  };

  render () {
    const {bet} = this.props

    return (
      <React.Fragment>
        <View style={styles.contentContainer}>
          <View style={styles.tipTitlesContainer}>
            <View>
              <Text style={styles.tipLabel}>INNING</Text>
              <Text style={styles.tipValue}>4th</Text>
            </View>
            <View>
              <Text style={styles.tipLabel}>EXPIRES IN</Text>
              <Text style={styles.tipValue}>:11</Text>
            </View>
          </View>

          <View>
            <View style={styles.playerPhotoContainer}>
              <Image source={PLAYER_PHOTO} style={styles.playerPhoto} resizeMode='contain' />
            </View>
            <Text style={styles.playerName}>Eddie Rosario</Text>
            <Text style={styles.playerDescription}>MIN - LF #20 {bet && bet.player ? bet.player.name : ''}</Text>
          </View>

          <View>
            {/* streak eligible label? */}
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.questionText}>Will he <Text style={styles.questionTextBold}>fly out or get a hit</Text> in his next at bat?</Text>
          </View>
        </View>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button} onPress={this.decline}>
            <Text style={styles.buttonTitle}>NO</Text>
            <Text style={styles.buttonSubtitle}>Pays: <Emoji name=':gem:' style={styles.emojiCrystal} />365</Text>
          </TouchableOpacity>
          <View style={styles.buttonsBorder} />
          <TouchableOpacity style={styles.button} onPress={this.accept}>
            <Text style={styles.buttonTitle}>YES</Text>
            <Text style={styles.buttonSubtitle}>Pays: <Emoji name=':gem:' style={styles.emojiCrystal} />100</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )
  }
}
