import React, { Component } from "react";
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button
} from "react-native";
import styled from "styled-components/native";

const StyledText = styled.Text`
  margin-vertical: 16px;
  width: 145px;
  height: 48px;
  border-radius: 300px;
  background-color: #ed4159;
  font-family: Gotham;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  text-align: center;
  color: #ffffff;
  text-align-vertical: center;
`;

export default class CustomButton extends Component {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <TouchableOpacity {...otherProps}>
        <StyledText>{children}</StyledText>
      </TouchableOpacity>
    );
  }
}

AppRegistry.registerComponent("CustomButton", () => CustomButton);
