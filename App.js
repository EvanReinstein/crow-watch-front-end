import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { withAuthenticator } from 'aws-amplify-react-native'

import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('Crow Watch', () => App);

export default withAuthenticator(App);
