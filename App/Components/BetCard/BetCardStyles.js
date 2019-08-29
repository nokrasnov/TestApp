import { StyleSheet } from 'react-native'

const buttonColor = '#FF8400'

export default StyleSheet.create({
  contentContainer: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 100
  },
  tipTitlesContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tipLabel: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'gray'
  },
  tipValue: {
    fontSize: 14,
    textAlign: 'center'
  },
  playerPhotoContainer: {
    alignItems: 'center'
  },
  playerPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },
  playerName: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5
  },
  playerDescription: {
    color: 'gray',
    textAlign: 'center'
  },
  questionContainer: {
    padding: 10
  },
  questionText: {
    fontSize: 16,
    textAlign: 'center'
  },
  questionTextBold: {
    fontWeight: 'bold'
  },

  bottomButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    width: '50%',
    height: 60,
    backgroundColor: buttonColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsBorder: {
    width: 2
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'white'
  },
  buttonSubtitle: {
    color: 'white'
  },
  emojiCrystal: {
    // fontSize: 30
  },
})
