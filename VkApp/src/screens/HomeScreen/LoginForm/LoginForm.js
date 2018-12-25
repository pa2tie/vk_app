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
import HomeScreen from "../HomeScreen";
import Logo from "../Logo/Logo";

@inject("mercuryStore")
@observer
export default class LoginForm extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    navigation.navigate("Profile");
  };

  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <HomeScreen>
        <Logo />
        <Panel>
          <CustomHeaderText>Log In</CustomHeaderText>
          <CustomTextInput
            onChangeText={text => mercuryStore.setEmail(text)}
            value={mercuryStore.email}
            placeholder="E-Mail"
          />
          <CustomTextInput
            onChangeText={text => mercuryStore.setPassword(text)}
            value={mercuryStore.password}
            placeholder="Password"
          />
          <CustomButton onPress={this.handleSubmit}>Login</CustomButton>
        </Panel>
      </HomeScreen>
    );
  }
}

AppRegistry.registerComponent("LoginForm", () => LoginForm);
