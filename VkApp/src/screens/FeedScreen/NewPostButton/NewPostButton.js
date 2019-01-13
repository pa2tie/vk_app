import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  image: {
    backgroundColor: "black",
    borderRadius: 100,
    width: 30,
    height: 30
  },
  text: {
    marginHorizontal: 20
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 50
  }
});

export default class NewPostButton extends Component {
  render() {
    const { imageUrl, ...otherProps } = this.props;
    return (
      <TouchableHighlight
        {...otherProps}
        onPress={() => {
          this.props.navigation.navigate("NewPost");
        }}
      >
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.text}>What's new?</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

AppRegistry.registerComponent("NewPostButton", () => NewPostButton);
