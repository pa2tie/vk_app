import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Modal,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

export default class NewPostScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: "What's new?",
      text: ""
    };
  }
  render() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={true}
        onRequestClose={() => {
          this.props.navigation.goBack();
        }}
      >
        <View>
          <KeyboardAvoidingView behavior="padding" enabled>
            <TextInput
              multiline={true}
              numberOfLines={4}
              onChangeText={text => this.setState({ text })}
              placeholder={this.state.placeholder}
            />
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}

AppRegistry.registerComponent("NewPostScreen", () => NewPostScreen);
