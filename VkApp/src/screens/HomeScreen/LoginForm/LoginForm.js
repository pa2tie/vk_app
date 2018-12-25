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
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

@inject("mercuryStore")
@observer
export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      validEmail: true
    };
  }

  handleSubmit = async e => {
    try {
      const result = await this.props.mercuryStore.loginRequest();
      this.props.mercuryStore.setUserName(result["name"]);
      this.props.mercuryStore.setPhotoUrl(result["photoUrl"]);
      this.setState({
        error: null,
        validEmail: true
      });
      this.props.navigation.navigate("Profile");
    } catch (response) {
      switch (response.status) {
        case 400:
          this.setState({
            error: response.error,
            validEmail: false
          });
          break;
        default:
          this.setState({
            error: response.error
          });
          break;
      }
    }
  };

  render() {
    const { mercuryStore, ...otherProps } = this.props;
    return (
      <HomeScreen>
        <Logo />
        <Panel>
          <CustomHeaderText>Log In</CustomHeaderText>
          <CustomTextInput
            onChangeText={text => {
              mercuryStore.setEmail(text);
              this.setState({
                validEmail: true
              });
            }}
            value={mercuryStore.email}
            placeholder="E-Mail"
            valid={this.state.validEmail}
          />
          <CustomTextInput
            onChangeText={text => mercuryStore.setPassword(text)}
            value={mercuryStore.password}
            placeholder="Password"
            secureTextEntry
          />
          {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <CustomButton onPress={this.handleSubmit}>Login</CustomButton>
        </Panel>
      </HomeScreen>
    );
  }
}

AppRegistry.registerComponent("LoginForm", () => LoginForm);
