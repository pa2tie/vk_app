import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const backgroundImage = "./assets/background.jpg";

const StyledImageBackground = styled.ImageBackground`
  flex: 1;
  width: null;
  height: null;
  resize-mode: cover;
`;

export default class BackgroundImage extends Component {
  render() {
    return (
      <StyledImageBackground source={require(backgroundImage)}>
        {this.props.children}
      </StyledImageBackground>
    );
  }
}

AppRegistry.registerComponent("BackgroundImage", () => BackgroundImage);
