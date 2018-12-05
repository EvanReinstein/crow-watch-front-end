import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import Photo from './photo';

class Photos extends Component {
  render() {
    return(
      <View>
        {this.props.photoInfo.map((info, index) => {
          let photo = this.props.photos[index];
          let base64Photo = photo.slice(22);
          let name = info.key;
          let date = info.lastModified.toDateString();
          return <Photo
            name={name}
            photo={photo}
            date={date}
            index={index}
            key={index}
            base64Photo={base64Photo}
            removePhoto={this.props.removePhoto}
            crowPhoto={this.props.crowPhoto} />
        })}
      </View>
    )
  }
}

export default Photos;
