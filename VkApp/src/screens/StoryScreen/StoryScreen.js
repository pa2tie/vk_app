import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Modal,
  TouchableHighlight
} from "react-native";

export default class StoryScreen extends Component {
  render() {
    const { visible, ...otherProps } = this.props;
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
          <Text>Story</Text>
        </View>
      </Modal>
    );
  }
}

AppRegistry.registerComponent("StoryScreen", () => StoryScreen);
