import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  border-radius: 4px;
  background-color: rgba(237, 65, 89, 0.25);
  padding: 11px 16px;
  margin-top: 0;
  margin-bottom: 24px;
`;

const ErrorText = styled.Text`
  font-family: Gotham;
  font-size: 14px;
  font-weight: 500;
  color: #ed4159;
`;

export default class ErrorMessage extends Component {
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <Container>
        <ErrorText>{children}</ErrorText>
      </Container>
    );
  }
}

AppRegistry.registerComponent("ErrorMessage", () => ErrorMessage);
