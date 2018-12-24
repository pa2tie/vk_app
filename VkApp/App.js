/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import Logo from "./src/screens/HomeScreen/Logo/Logo";
import LoginForm from "./src/screens/HomeScreen/LoginForm/LoginForm";
import stores from "./src/stores";
import { Provider } from "mobx-react";
import { StackNavigator } from "react-navigation";
import Profile from "./src/screens/HomeScreen/Profile/Profile";

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <HomeScreen>
          <Logo />
          <LoginForm />
          {/* <Profile /> */}
        </HomeScreen>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
