import React, { PureComponent } from "react";
import {
  AppRegistry,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  View,
  StyleSheet
} from "react-native";
import StoryScreen from "../../StoryScreen";

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
    const { title, image, ...otherProps } = this.props;
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={() => {
          this.props.navigation.navigate("Story");
        }}
        {...otherProps}
      >
        <View style={styles.itemView}>
          <Image style={styles.itemImage} source={{ uri: image }} />
          <Text style={styles.storiesTitle}>{title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

AppRegistry.registerComponent("StoriesItem", () => StoriesItem);
