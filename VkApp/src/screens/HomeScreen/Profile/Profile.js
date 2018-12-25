import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import Panel from "../Panel/Panel";
import CustomHeaderText from "../CustomHeaderText/CustomHeaderText";
import CustomButton from "../CustomButton/CustomButton";
import { inject, observer } from "mobx-react";
import HomeScreen from "../HomeScreen";
import Logo from "../Logo/Logo";

@inject("mercuryStore")
@observer
export default class Profile extends Component {
  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <HomeScreen>
        <Logo />
        <Panel>
          <Image />
          <CustomHeaderText>{mercuryStore.userName}</CustomHeaderText>
          <CustomButton>Logout</CustomButton>
        </Panel>
      </HomeScreen>
    );
  }
}

AppRegistry.registerComponent("Profile", () => Profile);
