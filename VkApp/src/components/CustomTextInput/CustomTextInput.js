import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled, { css } from "styled-components/native";

const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
  ${props =>
    !props.valid &&
    css`
      border-color: #ed4159;
      border-width: 1px;
      border-radius: 4px;
      color: #ed4159;
    `}
`;

const Input = styled.TextInput`
  color: black;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: 14px 16px;
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
    const { valid = true, ...otherProps } = this.props;
    return (
      <Container valid={valid}>
        <Input {...otherProps} />
      </Container>
    );
  }
}

AppRegistry.registerComponent("CustomTextInput", () => CustomTextInput);
