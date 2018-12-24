import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from "react-native";

const styles = StyleSheet.create({
  customHeaderText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#262626",
    opacity: 0.8,
    marginBottom: 30
  }
});

export default class CustomHeaderText extends Component {
  render() {
    return <Text style={styles.customHeaderText}>{this.props.children}</Text>;
  }
}

AppRegistry.registerComponent("CustomHeaderText", () => CustomHeaderText);
