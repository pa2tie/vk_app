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
  panel: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20
  }
});

export default class Panel extends Component {
  render() {
    return <View style={styles.panel}>{this.props.children}</View>;
  }
}

AppRegistry.registerComponent("Panel", () => Panel);
