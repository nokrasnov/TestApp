import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory';
import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'

// create our store
const store = createStore()

const httpLink = createHttpLink({
  uri: 'https://ft-api-staging.herokuapp.com/graphql'
})
const authLink = setContext((_, { headers }) => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NzIzNjkxODgsInN1YiI6MX0.yuS_LeQEYNcX4bcxAd8-j3QuxpETbZ15YrvJahTH0aA'
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
  // uri: 'https://ft-api-staging.herokuapp.com/graphql'
})

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <RootContainer />
        </Provider>
      </ApolloProvider>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
