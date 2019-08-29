import { StyleSheet } from 'react-native'
import { getScreenDimensions } from '../../Services/Utils'

const screen = getScreenDimensions()

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: screen.width - 40,
    height: screen.height / 2,
    position: 'absolute',
    top: screen.height / 4,
    left: 20,
    borderRadius: 20,
    overflow: 'hidden'
  }
})
