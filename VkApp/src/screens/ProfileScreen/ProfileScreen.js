import React, { Component } from "react";
import { AppRegistry, AsyncStorage } from "react-native";
import { inject, observer } from "mobx-react";
import styled from "styled-components/native";
import Panel from "../../components/Panel/Panel";
import CustomHeaderText from "../../components/CustomHeaderText/CustomHeaderText";
import CustomButton from "../../components/CustomButton/CustomButton";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Logo from "../../components/Logo/Logo";

@inject("vkStore")
@observer
export default class ProfileScreen extends Component {
  logout = async e => {
    e.preventDefault();
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
  render() {
    const { vkStore, ...otherProps } = this.props;
    return (
      <BackgroundImage>
        <Logo />
        <Panel>
          <CustomButton onPress={this.logout}>Logout</CustomButton>
        </Panel>
      </BackgroundImage>
    );
  }
}

AppRegistry.registerComponent("ProfileScreen", () => ProfileScreen);
