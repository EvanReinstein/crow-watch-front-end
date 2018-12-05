import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native';
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

  removePhoto(input, index) {
    // Delete photo from S3
    Storage.remove(input)
    .then(result => console.log(`Removed ${input} at index: ${index}`))
    .catch(err => console.log(err));
    // filter out the deleted photo within state and then reset in order to re-render
    let photoInfo = this.state.photoInfo;
    let photos = this.state.photos;
    let newPhotos = photos.filter((photo, i) => i !== index)
    let newPhotoInfo = photoInfo.filter(photo => photo.key !== input)
    this.setState({ photoInfo: newPhotoInfo, photos: newPhotos });
    Alert.alert('Non-Crow photo removed');
  }

  crowPhoto(name, input, index) {
    // Send photo to s3 protected folder
    Storage.put(name, input, {
      level: 'protected',
      contentType: 'image/png'
    })
    .then (result => console.log('Storage.put result is: ', result))
    .catch(err => console.log(err));
    // Remove photo from the public folder
    Storage.remove(name)
    .then(result => console.log(`Removed ${name} at index: ${index}`))
    .catch(err => console.log(err));
    // Remove photo/photoInfo from state and re-render page
    let photoInfo = this.state.photoInfo;
    let photos = this.state.photos;
    let newPhotos = photos.filter((photo, i) => i !== index)
    let newPhotoInfo = photoInfo.filter(photo => photo.key !== name)
    this.setState({ photoInfo: newPhotoInfo, photos: newPhotos });
    Alert.alert('Get that Crow Data!');
  }

  // Function to fetch data on initial load.
  fetchData = () => {
    // Gets Photo Keys from S3 bucket
    Storage.list('')
      .then(res => {
        // Get numbers from the photo key property
        let photos = res.map(photo => {
          const re = /[0-9]/g;
          let numbers = photo.key.match(re).join('');
          // Use the numbers to complete the fetch URL
          fetch(`${s3Bucket}Photo%3A+${numbers}`, {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(result => {
            // Set base64 encoded image into an img uri string.  This is one type of
            // method that react native uses to decode base64 encoded images.
            let img = `data:image/png;base64,${result._bodyText}`;
            this.setState({ photos: [...this.state.photos, img], photoInfo: [...this.state.photoInfo, photo] });
          })
          .catch(err => console.log(err))
          return 'Fetch complete!';
        });
      })
      .catch(err => console.log(err));
  }

  componentWillMount() {
    this.fetchData();
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.textHeader}>Welcome to Crow Watch</Text>
        <View>
          <Text style={styles.textSubHeader}>In Crow Watch 1.0, we will work to collect photos of Crows.
                Using these photos we can build a database of photos, which
                will eventually be used to train the app to recognize Crows.
          </Text>
        </View>
        <View>
          <Photos
            photos={this.state.photos}
            photoInfo={this.state.photoInfo}
            removePhoto={this.removePhoto.bind(this)}
            crowPhoto={this.crowPhoto.bind(this)}
            />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  textHeader: {
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: 30,
    marginBottom: 20
  },
  textSubHeader: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'American Typewriter',
    textAlign: 'center',
    marginBottom: 20,
  }
})

export default Profile;
