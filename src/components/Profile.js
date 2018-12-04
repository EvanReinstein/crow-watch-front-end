import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { s3Bucket, identityPOOLID } from '../../config/config'

// AWS Related Imports
import Storage from '@aws-amplify/storage';
import { S3Image } from 'aws-amplify-react-native';

Storage.configure({
  bucket: 'crowwatch',
  region: 'us-west-2',
  identityPoolId: identityPOOLID
});

class Profile extends Component {
  state = {
    keys: [],
    photos: []
  }

  componentWillMount() {
    Storage.list('')
      .then(res => {
        console.log(res);
        let keys = res.map(photo => {
          return photo.key;
        });
        this.setState({ keys });
        console.log(this.state.keys);
      })
      .catch(err => console.log(err));

    fetch(`${s3Bucket}Photo%3A+1`, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      let img = `data:image/png;base64,${res._bodyText}`;
      this.setState({ photos: [img] });
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
