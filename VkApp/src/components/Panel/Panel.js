import React, { Component } from "react";
import { AppRegistry } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 8;
  margin-left: 20;
  margin-right: 20;
`;

export default class Panel extends Component {
  render() {
    return <Container>{this.props.children}</Container>;
  }
}

AppRegistry.registerComponent("Panel", () => Panel);
