import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import Photo from './photo';

class Photos extends Component {
  render() {
    return(
      <View>
        {this.props.photoInfo.map((info, index) => {
          let photo = this.props.photos[index];
          let name = info.key;
          let date = info.lastModified.toDateString();
          return <Photo name={name} photo={photo} date={date} key={index} />
        })}
      </View>
    )
  }
}

export default Photos;
