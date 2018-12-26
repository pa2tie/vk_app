import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import ProfileScreen from "./src/screens/ProfileScreen/ProfileScreen";
import stores from "./src/stores";
import { Provider } from "mobx-react";

const Navigator = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen }
  },
  { initialRouteName: "Login", headerMode: "none" }
);

const AppNavigator = createAppContainer(Navigator);

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
