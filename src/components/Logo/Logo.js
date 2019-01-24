import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const logoImage = "./assets/w-mercury-development.png";

const StyledImage = styled.Image`
  justify-content: center;
  align-self: center;
  margin-top: 50;
  margin-bottom: 50;
  height: 50;
  width: 250;
`;

export default class Logo extends Component {
  render() {
    return <StyledImage source={require(logoImage)} />;
  }
}

AppRegistry.registerComponent("Logo", () => Logo);
