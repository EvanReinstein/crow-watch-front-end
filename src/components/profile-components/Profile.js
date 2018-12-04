import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { s3Bucket, identityPOOLID } from '../../../config/config';
import Photos from './photos';

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
    photos: [],
    photoInfo: []
  }

  componentWillMount() {
    // Gets Photo Keys from S3 bucket
    Storage.list('')
      .then(res => {

        // Get last char of photo key from List
        let photos = res.map(photo => {
          let lastChar = photo.key[photo.key.length - 1];
          // Use the last char to complete the fetch URL
          fetch(`${s3Bucket}Photo%3A+${lastChar}`, {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(result => {
            let img = `data:image/png;base64,${result._bodyText}`
            this.setState({ photos: [...this.state.photos, img], photoInfo: [...this.state.photoInfo, photo] });
          })
          .catch(err => console.log(err))
          return 'Fetch complete!';
        });
        console.log('>>>>>>>>>', this.state.photoInfo);
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <View>
        <Text>Welcome to Crow Watch</Text>
        <ScrollView>
          <Photos photos={this.state.photos} photoInfo={this.state.photoInfo} />
        </ScrollView>
      </View>
    );
  }
}



export default Profile;

// {this.state.photos.map((photo, i) => {
//   return <Image source={{uri: photo}} key={i} style={{width: 400, height: 400}}/>
// })}
