import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import BetCardLoader from '../Components/BetCardLoader/BetCardLoader'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.text}>List of bets</Text>
        </SafeAreaView>

        <View style={styles.backgroundContainer}>
          <BetCardLoader />
        </View>
      </View>
    )
  }
}
