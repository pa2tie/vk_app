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

const logoImage = "./assets/w-mercury-development.png";

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    height: 50,
    width: 250
  }
});

export default class Logo extends Component {
  render() {
    return <Image style={styles.logo} source={require(logoImage)} />;
  }
}

AppRegistry.registerComponent("Logo", () => Logo);
