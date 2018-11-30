import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return(
      <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textMainHeader}>Welcome to Crow Watch</Text>
            <Image source={require('../../assets/crow.png')} />
          </View>
          <View style={styles.container}>
            <Text>About</Text>
            <Text style={styles.textContainer}>After moving to Oakland, CA in the summer of 2017 I was lucky enough to
              find an apartment with a beautiful deck and view of the Berkely, Oakland, and Montclair
              Hills.  I got to work right away....
            </Text>
            <Image source={require('../../assets/jade.png')} style={styles.plantPhoto} />
            <Image source={require('../../assets/lemonTrees.png')} style={styles.plantPhoto} />
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
  textMainHeader: {
    fontSize: 40,
  },
  textContainer: {
    width: 300,
    marginTop: 20
  },
  plantPhoto: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10
  }
})
