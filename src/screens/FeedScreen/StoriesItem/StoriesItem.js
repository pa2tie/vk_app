import React, { PureComponent } from "react";
import { AppRegistry, Text, Image, View, StyleSheet } from "react-native";
import VkTouchableHighlight from "../../../components/VkTouchableHighlight/VkTouchableHighlight";

const styles = StyleSheet.create({
  item: {
    width: 80,
    height: 120,
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  itemView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  itemImage: {
    backgroundColor: "black",
    borderRadius: 100,
    marginBottom: 5,
    width: 60,
    height: 60
  },
  itemTitle: {
    textAlign: "center",
    width: 60
  }
});

export default class StoriesItem extends PureComponent {
  render() {
    const { title, avatar, ...otherProps } = this.props;
    return (
      <VkTouchableHighlight
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate("Story");
        }}
        {...otherProps}
      >
        <View style={styles.itemView}>
          <Image style={styles.itemImage} source={{ uri: avatar }} />
          <Text numberOfLines={1} style={styles.storiesTitle}>
            {title}
          </Text>
        </View>
      </VkTouchableHighlight>
    );
  }
}

AppRegistry.registerComponent("StoriesItem", () => StoriesItem);
