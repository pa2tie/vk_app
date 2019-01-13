import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  Image,
  ViewPagerAndroid
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StoriesItem from "./StoriesItem/StoriesItem";
import NewPostButton from "./NewPostButton/NewPostButton";
import PostItem from "./PostItem/PostItem";
import CameraScreen from "../CameraScreen";
import VkTouchableHighlight from "../../components/VkTouchableHighlight/VkTouchableHighlight";

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
  constructor(props) {
    super(props);
    this.viewPager = "";
    this.state = {
      refreshing: false
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({
      viewPager: this.viewPager
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: "News",
      headerLeft: (
        <VkTouchableHighlight>
          <Ionicons
            style={{ marginLeft: 20 }}
            name="ios-camera"
            color="#fff"
            size={40}
            onPress={() => {
              navigation.state.params.viewPager.setPage(0);
            }}
          />
        </VkTouchableHighlight>
      ),
      headerStyle: {
        backgroundColor: "#5181B8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    };
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

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        setTimeout(
          () =>
            this.setState({
              refreshing: false
            }),
          2000
        );
      }
    );
  };

  render() {
    return (
      <ViewPagerAndroid
        ref={viewPager => {
          this.viewPager = viewPager;
        }}
        style={{ flex: 1 }}
        initialPage={1}
      >
        <View key="0">
          <CameraScreen />
        </View>
        <View style={styles.feed} key="1">
          <FlatList
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
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
      </ViewPagerAndroid>
    );
  }
}

AppRegistry.registerComponent("FeedScreen", () => FeedScreen);
