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
import styled, { css } from "styled-components/native";

const Container = styled.View`
  width: 100%;
`;

const Input = styled.TextInput`
  color: black;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 14px 16px;
  margin-bottom: 24px;
  width: 100%;

  opacity: 0.8;
  font-family: Gotham;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  color: #262626;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 10px rgba(151, 151, 151, 0.25);
  }
`;

export default class CustomTextInput extends Component {
  render() {
    const { ...otherProps } = this.props;
    return (
      <Container>
        <Input {...otherProps} />
      </Container>
    );
  }
}

AppRegistry.registerComponent("CustomTextInput", () => CustomTextInput);
