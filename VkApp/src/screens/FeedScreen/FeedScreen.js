import React, { Component } from "react";
import { AppRegistry, View, StyleSheet, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import StoriesItem from "./StoriesItem/StoriesItem";
import NewPostButton from "./NewPostButton/NewPostButton";
import PostItem from "./PostItem/PostItem";
import VkTouchableHighlight from "../../components/VkTouchableHighlight/VkTouchableHighlight";
import { inject, observer } from "mobx-react";

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

@inject("vkStore")
@observer
export default class FeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      newsFeed: {},
      stories: {}
    };
  }

  componentDidMount() {
    this.handleRefresh();
  }

  static navigationOptions = ({ navigation }) => {
    console.log(navigation.state.routeName);
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
              navigation.navigate("Camera");
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
          data={this.state.stories.groups}
          renderItem={({ item }) => (
            <StoriesItem
              navigation={this.props.navigation}
              title={item.name}
              avatar={item.photo200}
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
      async () => {
        await this.getNewsFeed();
        await this.getStories();
        this.setState({
          refreshing: false
        });
      }
    );
  };

  getNewsFeed = async () => {
    try {
      this.setState({
        newsFeed: await this.props.vkStore.getNewsFeed()
      });
      console.log("news", this.state.newsFeed);
    } catch (error) {
      console.log("newsError", error);
    }
  };

  getStories = async () => {
    try {
      this.setState({
        stories: await this.props.vkStore.getStories()
      });
      console.log("stories", this.state.stories);
    } catch (error) {
      console.log("storiesError", error);
    }
  };

  render() {
    return (
      <View style={styles.feed}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          ListHeaderComponent={this.renderHeader}
          data={this.state.newsFeed.items}
          renderItem={({ item, index }) =>
            !!item && (
              <PostItem
                style={styles.postItem}
                navigation={this.props.navigation}
                title={this.state.newsFeed.groups[index].name}
                avatar={this.state.newsFeed.groups[index].photo200}
                date={item.date}
                text={item.text}
                likes={item.likes.count}
                comments={item.comments.count}
                reposts={item.reposts.count}
                views={item.views.count}
              />
            )
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("FeedScreen", () => FeedScreen);
