import React, { Component } from "react";
import { AppRegistry, Text, Image, View, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import VkTouchableHighlight from "../../../components/VkTouchableHighlight/VkTouchableHighlight";

const styles = StyleSheet.create({
  item: {
    paddingTop: 20
  },
  header: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 30,
    justifyContent: "space-between"
  },
  headerImage: {
    backgroundColor: "black",
    borderRadius: 100,
    marginBottom: 5,
    width: 50,
    height: 50
  },
  headerText: {
    flex: 1,
    marginLeft: 20,
    justifyContent: "center"
  },
  headerTitle: {
    color: "#5181B8",
    fontWeight: "bold"
  },
  contentText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "black"
  },
  contentImage: {
    backgroundColor: "black",
    height: 200
  },
  footer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between"
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10
  },
  footerItemIcon: {
    marginRight: 5
  }
});

export default class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likesCount: 533,
      commentsCount: 40,
      repostsCount: 211,
      viewsCount: 988,
      isLiked: false
    };
  }

  changeLike = () => {
    this.setState({
      isLiked: this.state.isLiked ? false : true
    });
  };
  render() {
    const { avatar, title, time, content, ...otherProps } = this.props;
    return (
      <VkTouchableHighlight {...otherProps}>
        <View style={styles.item}>
          <View style={styles.header}>
            <Image style={styles.headerImage} source={{ uri: avatar }} />
            <View style={styles.headerText}>
              <Text numberOfLines={1} style={styles.headerTitle}>
                {title}
              </Text>
              <Text>{time}</Text>
            </View>
            <Ionicons
              name="ios-more"
              color="#8E8E93"
              size={20}
              style={{
                transform: [{ rotate: "90deg" }]
              }}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>{content.text}</Text>
            {content.media && (
              <Image
                style={styles.contentImage}
                source={{ uri: content.image }}
              />
            )}
          </View>
          <View style={styles.footer}>
            <VkTouchableHighlight onPress={this.changeLike}>
              <View style={styles.footerItem}>
                <Ionicons
                  name={"ios-" + (this.state.isLiked ? "heart" : "heart-empty")}
                  color={this.state.isLiked ? "red" : "#8E8E93"}
                  size={30}
                  style={styles.footerItemIcon}
                />
                <Text>{this.state.likesCount}</Text>
              </View>
            </VkTouchableHighlight>
            <VkTouchableHighlight>
              <View style={styles.footerItem}>
                <Ionicons
                  style={styles.footerItemIcon}
                  name="ios-chatboxes"
                  color="#8E8E93"
                  size={30}
                />
                <Text>{this.state.commentsCount}</Text>
              </View>
            </VkTouchableHighlight>
            <VkTouchableHighlight>
              <View style={styles.footerItem}>
                <Ionicons
                  style={styles.footerItemIcon}
                  name="ios-undo"
                  color="#8E8E93"
                  size={30}
                />
                <Text>{this.state.repostsCount}</Text>
              </View>
            </VkTouchableHighlight>
            <View style={styles.footerItem}>
              <Ionicons
                style={styles.footerItemIcon}
                name="ios-eye"
                color="#8E8E93"
                size={20}
              />
              <Text>{this.state.viewsCount}</Text>
            </View>
          </View>
        </View>
      </VkTouchableHighlight>
    );
  }
}

AppRegistry.registerComponent("PostItem", () => PostItem);
