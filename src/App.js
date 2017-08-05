import React from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LogInForm from './components/LogInForm'

class App extends React.Component {
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
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LogInForm />
      </View>
    )
  }
}

export default App
