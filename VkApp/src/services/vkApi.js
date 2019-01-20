import { AsyncStorage } from "react-native";
import * as http from "./http";

export const login = async ({ username, password }) => {
  const options = {
    params: {
      username,
      password,
      grantType: "password",
      scope: 8258,
      clientId: 3697615,
      clientSecret: "AlVXZFMUqyrnABp8ncuU"
    }
  };
  const { accessToken } = await http.get("https://oauth.vk.com/token", options);
  await AsyncStorage.setItem("accessToken", accessToken);
};

export const fetchNewsFeed = async (startFrom = "") => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const options = {
    params: {
      v: "5.92",
      filters: "post",
      count: 10,
      startFrom,
      accessToken
    }
  };
  return http.get("https://api.vk.com/method/newsfeed.get", options);
};

export const fetchStories = async () => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  const options = {
    params: {
      v: "5.92",
      extended: 1,
      accessToken
    }
  };

  return http.get("https://api.vk.com/method/stories.get", options);
};
