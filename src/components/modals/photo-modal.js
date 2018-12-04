import React, { Component } from 'react';
import { Modal, View, Image } from 'react-native';

class PhotoModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible() {
    this.setState({ modalVisible: visible });
  }

  removeModal() {
    this.setState({ modalVisible: false })
  }

  render() {
    return(
      <View>
        <Modal
          animationType:"fade"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View>
            <Image />
          </View>
        </Modal>
      </View>
    )
  }
}
