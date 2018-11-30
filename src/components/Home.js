import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return(
      <ScrollView>
          <View style={styles.container}>
            <Text style={styles.text}>Welcome to Crow Watch</Text>
            <Image source={require('../../assets/crow.png')} />
          </View>
      </ScrollView>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontSize: 40,
  }
})
