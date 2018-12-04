import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

class Photo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <Title>{this.props.name}</Title>
            <Paragraph>Date: {this.props.date}</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: this.props.photo }} />
          <Card.Actions>
            <Button
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
  }
})
