import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StoriesItem from "./StoriesItem/StoriesItem";
import NewPostButton from "./NewPostButton/NewPostButton";
import PostItem from "./PostItem/PostItem";

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  },
  storiesList: {
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: "white"
  },
  newPostButton: {
    backgroundColor: "white"
  },
  postItem: {
    marginTop: 10,
    backgroundColor: "white"
  }
});

export default class FeedScreen extends Component {
  static navigationOptions = {
    title: "News",
    headerLeft: (
      <Ionicons
        style={{ marginLeft: 20 }}
        name="ios-camera"
        color="#fff"
        size={40}
      />
    ),
    headerStyle: {
      backgroundColor: "#5181B8"
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff"
  };

  renderHeader = () => {
    return (
      <View>
        <NewPostButton
          navigation={this.props.navigation}
          style={styles.newPostButton}
          imageUrl="url"
        />
        <FlatList
          style={styles.storiesList}
          horizontal
          data={[
            { title: "videosos", image: "url" },
            { title: "9GAG", image: "url" }
          ]}
          renderItem={({ item }) => (
            <StoriesItem
              navigation={this.props.navigation}
              title={item.title}
              imageUrl={item.image}
            />
          )}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.feed}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          data={[
            {
              avatar: "url",
              title: "SMMщики",
              time: "today",
              content: {
                text: "Кризис поколения Y"
              }
            },
            {
              avatar: "url",
              title: "batya",
              time: "today at 13:19",
              content: {
                text:
                  "Создатель платформера Celeste поделился подробностями грядущего дополнения:",
                media: "url"
              }
            },
            {
              avatar: "url",
              title: "For Web - фронтенд, дизайн, программирование",
              time: "11 January at 19:51",
              content: {
                text:
                  "Градиентная рамка на CSS: обзор способов реализации от Криса Койера https://css-tricks.com"
              }
            }
          ]}
          renderItem={({ item }) => (
            <PostItem
              style={styles.postItem}
              navigation={this.props.navigation}
              title={item.title}
              avatar={item.avatar}
              time={item.time}
              content={item.content}
            />
          )}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("FeedScreen", () => FeedScreen);
