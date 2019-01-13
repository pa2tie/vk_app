import React, { Component } from "react";
import { AppRegistry, Text, Image, View, StyleSheet } from "react-native";
import VkTouchableHighlight from "../../../components/VkTouchableHighlight/VkTouchableHighlight";

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
      <VkTouchableHighlight
        {...otherProps}
        onPress={() => {
          this.props.navigation.navigate("NewPost");
        }}
      >
        <View style={styles.wrapper}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.text}>What's new?</Text>
        </View>
      </VkTouchableHighlight>
    );
  }
}

AppRegistry.registerComponent("NewPostButton", () => NewPostButton);
