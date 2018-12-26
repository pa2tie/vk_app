import React, { Component } from "react";
import { AppRegistry, Image } from "react-native";
import { inject, observer } from "mobx-react";
import styled from "styled-components/native";
import Panel from "../../components/Panel/Panel";
import CustomHeaderText from "../../components/CustomHeaderText/CustomHeaderText";
import CustomButton from "../../components/CustomButton/CustomButton";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Logo from "../../components/Logo/Logo";

const RoundImage = styled.Image`
  border-radius: 500;
  width: 86px;
  height: 86px;
  margin-bottom: 24px;
`;

@inject("mercuryStore")
@observer
export default class ProfileScreen extends Component {
  logout = e => {
    e.preventDefault();
    this.props.navigation.navigate("Login");
  };
  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <BackgroundImage>
        <Logo />
        <Panel>
          <RoundImage source={{ uri: mercuryStore.photoUrl }} />
          <CustomHeaderText>{mercuryStore.userName}</CustomHeaderText>
          <CustomButton onPress={this.logout}>Logout</CustomButton>
        </Panel>
      </BackgroundImage>
    );
  }
}

AppRegistry.registerComponent("ProfileScreen", () => ProfileScreen);
