import React, { Component } from "react";
import { AppRegistry, TouchableHighlight } from "react-native";

export default class VkTouchableHighlight extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="rgba(228, 233, 237, 0.2)"
        {...this.props}
      />
    );
  }
}

AppRegistry.registerComponent(
  "VkTouchableHighlight",
  () => VkTouchableHighlight
);
