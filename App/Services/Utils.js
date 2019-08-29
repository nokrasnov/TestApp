import {Dimensions} from 'react-native'

export function getScreenDimensions () {
  const screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }

  return screen
}
