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
import styled from "styled-components/native";

const RoundImage = styled.Image`
  border-radius: 500;
  width: 86px;
  height: 86px;
  margin-bottom: 24px;
`;

@inject("mercuryStore")
@observer
export default class Profile extends Component {
  logout = e => {
    e.preventDefault();
    this.props.navigation.navigate("LoginForm");
  };
  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <HomeScreen>
        <Logo />
        <Panel>
          <RoundImage source={{ uri: mercuryStore.photoUrl }} />
          <CustomHeaderText>{mercuryStore.userName}</CustomHeaderText>
          <CustomButton onPress={this.logout}>Logout</CustomButton>
        </Panel>
      </HomeScreen>
    );
  }
}

AppRegistry.registerComponent("Profile", () => Profile);
