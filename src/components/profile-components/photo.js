import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Photo extends Component {
  render() {
    return (
      <View>
        <Text>Name: {this.props.name}</Text>
        <Text>Date: {this.props.date}</Text>
      </View>
    )
  }
}

export default Photo;
