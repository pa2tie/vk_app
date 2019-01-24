import React, { Component } from "react";
import { AppRegistry } from "react-native";
import { inject, observer } from "mobx-react";
import Panel from "../../components/Panel/Panel";
import CustomHeaderText from "../../components/CustomHeaderText/CustomHeaderText";
import CustomTextInput from "../../components/CustomTextInput/CustomTextInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import Logo from "../../components/Logo/Logo";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

@inject("vkStore")
@observer
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      validEmail: true
    };
  }

  handleSubmit = async e => {
    try {
      await this.props.vkStore.login();
      this.setState({
        error: null,
        validEmail: true
      });
      this.props.navigation.navigate("App");
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
    const { vkStore, ...otherProps } = this.props;
    return (
      <BackgroundImage>
        <Logo />
        <Panel>
          <CustomHeaderText>Log In</CustomHeaderText>
          <CustomTextInput
            onChangeText={text => {
              vkStore.setUsername(text);
              this.setState({
                validEmail: true
              });
            }}
            value={vkStore.username}
            placeholder="E-Mail"
            valid={this.state.validEmail}
          />
          <CustomTextInput
            onChangeText={text => vkStore.setPassword(text)}
            value={vkStore.password}
            placeholder="Password"
            secureTextEntry
          />
          {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
          <CustomButton onPress={this.handleSubmit}>Login</CustomButton>
        </Panel>
      </BackgroundImage>
    );
  }
}

AppRegistry.registerComponent("LoginScreen", () => LoginScreen);
