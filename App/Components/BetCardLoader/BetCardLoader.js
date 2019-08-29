import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import BetCard from '../BetCard/BetCard'
import BetCardAnimation, {CARD_STATE} from '../BetCardAnimation/BetCardAnimation'

class BetCardLoader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeCardState: CARD_STATE.WAITING,
      activeBet: {},
      loading: true
    }
  }

  componentDidMount () {
    this.loadGames()
  }

  loadGames () {
    this.props.client.query({
      query: gql`
        {
          games {
            id
          }
        }
    `
    })
      .then(response => {
        this.setState({
          loading: false
        })
        const games = response.data ? response.data.games : null
        if (games && games[0]) {
          this.createBet(games[0].id)
        }
      })
      .catch(() => {
        this.setState({
          loading: false
        })
      })
  }

  createBet (gameId) {
    console.log(gameId)
    this.setState({
      activeCardState: CARD_STATE.APPEARING,
      activeBet: {
        player: {
          name: gameId
        }
      }
    })
  }

  changeCard = () => {
    this.setState({
      activeCardState: CARD_STATE.ENDING
    })
  };

  showNextCard = () => {
    this.setState({
      activeCardState: CARD_STATE.APPEARING
    })
  };

  acceptBet = () => {
    this.changeCard()
    console.log('accept')
  };

  declineBet = () => {
    this.changeCard()
    console.log('decline')
  };

  render () {
    const {activeCardState, loading, activeBet} = this.state

    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )
    }

    return (
      <React.Fragment>
        <BetCardAnimation cardState={activeCardState} onHideCard={this.showNextCard}>
          <BetCard bet={activeBet} onAccept={this.acceptBet} onDecline={this.declineBet} />
        </BetCardAnimation>
      </React.Fragment>
    )
  }
}

export default withApollo(BetCardLoader)
