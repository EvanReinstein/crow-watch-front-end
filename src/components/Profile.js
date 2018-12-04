import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
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
    // Gets Photo Keys from S3 bucket
    Storage.list('')
      .then(res => {
        console.log(res);
        // Get last char of photo key from List
        let photoInfo = res.map(photo => {
          let lastChar = photo.key[photo.key.length - 1];
          console.log(lastChar);
          // Use the last char to complete the fetch URL
          fetch(`${s3Bucket}Photo%3A+${lastChar}`, {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(result => {
            let img = `data:image/png;base64,${result._bodyText}`
            this.setState({ photos: [...this.state.photos, img] });
          })
          .catch(err => console.log(err))
          return 'Fetch complete!';
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <View>
        <Text>Welcome to Crow Watch</Text>
        <ScrollView>
          {this.state.photos.map((photo, i) => {
            return <Image source={{uri: photo}} key={i} style={{width: 400, height: 400}}/>
          })}
        </ScrollView>
      </View>
    );
  }
}



export default Profile;
