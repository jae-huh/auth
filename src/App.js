import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header, Button, CardSection, Spinner } from './components/common'
import LogInForm from './components/LogInForm'

class App extends React.Component {
  state = { loggedIn: null }

  // firebase initialisation
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDY4ICPj_-lGIhMBpVp_VGS7jEu79PYtO8',
      authDomain: 'reactnativeauth-c7967.firebaseapp.com',
      databaseURL: 'https://reactnativeauth-c7967.firebaseio.com',
      projectId: 'reactnativeauth-c7967',
      storageBucket: 'reactnativeauth-c7967.appspot.com',
      messagingSenderId: '1092620974630',
    })

    firebase.auth().onAuthStateChanged((user) => { // this 'user' will be an object about the user if they're signed in, or return null or undefined if signed out
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )

      case false:
        return <LogInForm />

      default:
        return (
          <CardSection>
            <Spinner size="large" />
          </CardSection>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App
