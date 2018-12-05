import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import AppContainer from './AppContainer';


// React Native Paper //
import {DefaultTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';

// AWS AMPLIFY //
////////////////
import { withAuthenticator, AmplifyTheme, Authenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);
////////////////

// Theme Override //
///////////////////
const MyButton = Object.assign({}, AmplifyTheme.button, { backgroundColor: '#A7B1B2' });
const myNavBar = Object.assign({}, AmplifyTheme.navBar, { marginTop: 35, padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'});
const myTheme = Object.assign({}, AmplifyTheme, { button: MyButton, navBar: myNavBar });

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
    this.forceUpdate();
  }

  render() {
    return (
      <PaperProvider theme={defaultTheme}>
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
  includeGreetings = true,
  authenticatorComponents = [],
  federated = null,
  theme = {myTheme}
);
