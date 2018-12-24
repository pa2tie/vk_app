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
import { inject, observer } from "mobx-react";
import Panel from "../Panel/Panel";
import CustomHeaderText from "../CustomHeaderText/CustomHeaderText";
import CustomTextInput from "../CustomTextInput/CustomTextInput";
import CustomButton from "../CustomButton/CustomButton";

@inject("mercuryStore")
@observer
export default class LoginForm extends Component {
  handleSubmit = async e => {
    e.preventDefault();
  };

  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <Panel>
        <CustomHeaderText>Log In</CustomHeaderText>
        <CustomTextInput
          onChangeText={mercuryStore.setEmail}
          value={mercuryStore.email}
          placeholder="E-Mail"
        />
        <CustomTextInput
          onChangeText={mercuryStore.setPassword}
          value={mercuryStore.password}
          placeholder="Password"
        />
        <CustomButton onPress={this.handleSubmit}>Login</CustomButton>
      </Panel>
    );
  }
}

AppRegistry.registerComponent("LoginForm", () => LoginForm);
