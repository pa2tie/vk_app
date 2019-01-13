import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Modal,
  TouchableHighlight
} from "react-native";

export default class NewPostScreen extends Component {
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={true}
        onRequestClose={() => {
          this.props.navigation.goBack();
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>New post</Text>
        </View>
      </Modal>
    );
  }
}

AppRegistry.registerComponent("NewPostScreen", () => NewPostScreen);
