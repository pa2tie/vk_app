import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 28;
  font-weight: bold;
  text-align: center;
  color: #262626;
  opacity: 0.8;
  margin-bottom: 30;
`;

export default class CustomHeaderText extends Component {
  render() {
    return <StyledText>{this.props.children}</StyledText>;
  }
}

AppRegistry.registerComponent("CustomHeaderText", () => CustomHeaderText);
