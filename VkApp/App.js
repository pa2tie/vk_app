import React, { Component } from "react";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import AuthLoadingScreen from "./src/screens/AuthLoadingScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import FeedScreen from "./src/screens/FeedScreen";
import SearchScreen from "./src/screens/SearchScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import NewPostScreen from "./src/screens/NewPostScreen";
import StoryScreen from "./src/screens/StoryScreen";
import CameraScreen from "./src/screens/CameraScreen";
import stores from "./src/stores";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "mobx-react";

const FeedNavigator = createStackNavigator(
  {
    FeedRoot: {
      screen: createStackNavigator({
        Feed: FeedScreen
      })
    },
    NewPost: {
      screen: NewPostScreen
    },
    Story: {
      screen: StoryScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "FeedRoot"
  }
);

const BottomTabNavigator = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-paper" color={tintColor} size={30} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={30} />
        )
      }
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-text" color={tintColor} size={30} />
        )
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-notifications" color={tintColor} size={30} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-menu" color={tintColor} size={30} />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => ({}),
    tabBarOptions: {
      initialRouteName: "Feed",
      showLabel: false,
      activeTintColor: "#5181B8"
    }
  }
);

const AuthStack = createStackNavigator(
  { Login: LoginScreen },
  { headerMode: "none" }
);

const AppStack = createMaterialTopTabNavigator(
  {
    Camera: {
      screen: CameraScreen,
      navigationOptions: {
        tabBarVisible: false,
        swipeEnabled: true
      }
    },
    Tabs: {
      screen: BottomTabNavigator,
      navigationOptions: ({ navigation }) => ({
        tabBarVisible: false,
        swipeEnabled: navigation.state.index === 0 ? true : false
      })
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Tabs",
    animationEnabled: true
  }
);

const AppNavigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      headerMode: "none",
      initialRouteName: "AuthLoading"
    }
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
