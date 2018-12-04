import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

class Photo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title style={styles.cardText}>{this.props.name}</Title>
            <Paragraph style={styles.cardText}>Date: {this.props.date}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: this.props.photo }} />
          <Card.Actions>
            <Button
              style={styles.button}
              onPress={() => {
                Alert.alert('Lets scare some crows!')
              }}
              >
              Has Crow
            </Button>
            <Button
              style={styles.button}
              onPress={() => {
                Alert.alert('You tapped this button');
              }}>
              Delete
            </Button>
          </Card.Actions>
        </Card>
      </View>
    )
  }
}

export default Photo;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  button: {
    backgroundColor:'#000000',
    marginRight: 5,
    marginLeft: 5
  },
  cardText: {
    fontFamily: 'American Typewriter'
  }
})
