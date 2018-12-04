import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import AppContainer from './AppContainer';

// React Native Paper //
import {DefaultTheme, Appbar, Provider as PaperProvider } from 'react-native-paper';

// AWS AMPLIFY //
////////////////
import { withAuthenticator } from 'aws-amplify-react-native'

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
  _onMore = () => {

  }

  render() {
    return (
      <PaperProvider theme={defaultTheme}>
        <Appbar.Header>
          <Appbar.Content
            title="Crow Watch"
          />
          <Appbar.Action icon="more-vert" onPress={this._onMore} />
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
