import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

class Home extends Component {
  render() {
    return(
      <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.textMainHeader}>Welcome to Crow Watch</Text>
            <Image source={require('../../assets/crow.png')} />
          </View>
          <View style={styles.container}>
            <Text style={styles.textSubHeader}>About</Text>
            <Text style={styles.textContainer}>After moving to Oakland, CA in the summer of 2017 I was lucky enough to
              find an apartment with a beautiful deck and view of the Berkely, Oakland, and Montclair
              Hills.  I got to work right away....
            </Text>
            <Image source={require('../../assets/jade.png')} style={styles.plantPhoto} />
            <Image source={require('../../assets/lemonTrees.png')} style={styles.plantPhoto} />
            <Text style={styles.textContainer}>I soon noticed a problem with my outdoor slice of heaven....</Text>
            <Text style={styles.textMainHeader}>CROWS!!</Text>
            <Text style={styles.textContainer}>A murder of crows was hanging around my block and using my deck
              as their private toilet.  A friend showed me an app for watching a grill thermometer and I thought
              maybe I could re-purpose it...</Text>
            <Text style={styles.textContainerBottom}>This lead to the development of this app: Crow Watch.  A technological
              method for keeping an eye on my deck and watching out for crows.</Text>
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
    marginTop: 20,
  },
  textMainHeader: {
    fontSize: 30,
    fontFamily: 'AmericanTypewriter-Bold'
  },
  textSubHeader: {
    fontSize: 20,
    fontFamily: 'American Typewriter'
  },
  textContainer: {
    width: 300,
    marginTop: 20,
    fontFamily: 'American Typewriter'
  },
  plantPhoto: {
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10
  },
  textContainerBottom: {
    width: 300,
    marginTop: 20,
    marginBottom: 100,
    fontFamily: 'American Typewriter'
  }
})
