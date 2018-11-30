import React, {Component} from 'react';
import {BottomNavigation} from 'react-native-paper';
/////////////
// Components
/////////////
import Home from './src/components/Home';
import Profile from './src/components/Profile';

export default class AppContainer extends Component {
  state = {
    index: 0,
    routes: [
      {
        key: 'home',
        title: 'Home',
        icon: 'view-day',
      },
      {
        key: 'profile',
        title: 'Profile',
        icon: 'account-circle',
      }
    ]
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile});

  render() {
    return (<BottomNavigation
      navigationState={this.state}
      onIndexChange={this._handleIndexChange} renderScene={this._renderScene}/>);
  }
}
