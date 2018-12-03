import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Buffer } from 'buffer';
import { s3Bucket } from '../../config/config';

class Profile extends Component {
  state = {
    photos: []
  }

  componentWillMount() {
    fetch(`${s3Bucket}Photo%3A+1`, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      let img = `data:image/png;base64,${res._bodyText}`;
      this.setState({ photos: [img] });
      console.log(img);
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <View>
        <Text>Welcome to Crow Watch</Text>
        <View>
        {this.state.photos.map((photo, i) => {
          return <Image source={{uri: photo}} key={i} style={{width: 400, height: 400}}/>
        })}
        </View>
      </View>
    );
  }
}

export default Profile;
