import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  PermissionsAndroid
} from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";

export default class CameraScreen extends Component {
  state = { isPermitted: false };
  constructor(props) {
    super(props);
    var that = this;
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "CameraExample App Camera Permission",
            message: "CameraExample App needs access to your camera "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If CAMERA Permission is granted
          //Calling the WRITE_EXTERNAL_STORAGE permission function
          requestExternalWritePermission();
        } else {
          alert("CAMERA permission denied");
        }
      } catch (err) {
        alert("Camera permission err", err);
        console.warn(err);
      }
    }
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "CameraExample App External Storage Write Permission",
            message:
              "CameraExample App needs access to Storage data in your SD Card "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If WRITE_EXTERNAL_STORAGE Permission is granted
          //Calling the READ_EXTERNAL_STORAGE permission function
          requestExternalReadPermission();
        } else {
          alert("WRITE_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        alert("Write permission err", err);
        console.warn(err);
      }
    }
    async function requestExternalReadPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "CameraExample App Read Storage Write Permission",
            message: "CameraExample App needs access to your SD Card "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          //If READ_EXTERNAL_STORAGE Permission is granted
          //changing the state to re-render and open the camera
          //in place of activity indicator
          that.setState({ isPermitted: true });
        } else {
          alert("READ_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        alert("Read permission err", err);
        console.warn(err);
      }
    }
    //Calling the camera permission function
    requestCameraPermission();
  }
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      event.type,
      captureImages,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }
  render() {
    if (this.state.isPermitted) {
      return (
        <CameraKitCameraScreen
          // Buttons to perform action done and cancel
          actions={{ rightButtonText: "Done", leftButtonText: "Cancel" }}
          onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

AppRegistry.registerComponent("CameraScreen", () => CameraScreen);
