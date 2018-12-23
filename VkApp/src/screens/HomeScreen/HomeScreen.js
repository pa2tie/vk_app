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

const backgroundImage = "../../assets/img/background.jpg";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});

export default class HomeScreen extends Component {
  render() {
    const resizeMode = "center";
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require(backgroundImage)}
      >
        {this.props.children}
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent("HomeScreen", () => HomeScreen);
