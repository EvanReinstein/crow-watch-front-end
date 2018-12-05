import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import AppContainer from './AppContainer';

// React Native Paper //
import {DefaultTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';

// AWS AMPLIFY //
////////////////
import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);
////////////////

const defaultTheme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#A7B1B2',
    accent: '#A9F6FF',
  }
};

class App extends React.Component {
  logOut() {
    Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
  }

  render() {
    return (
      <PaperProvider theme={defaultTheme}>
        <Appbar.Header>
          <Appbar.Content
            title="Crow Watch"
          />
        <Button
          title='Sign Out'
          onPress={this.logOut.bind(this)}
          />
        </Appbar.Header>

        <AppContainer />
      </PaperProvider>
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

export default withAuthenticator(App,
  includeGreetings = false
);
