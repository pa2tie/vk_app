import { observable, action } from "mobx";
import * as api from "../services/vkApi";

export default class VkStore {
  @observable username = "";
  @observable password = "";

  @action setUsername(username) {
    this.username = username;
  }

  @action setPassword(password) {
    this.password = password;
  }

  async login() {
    await api.login({
      username: this.username,
      password: this.password
    });
  }

  async getNewsFeed() {
    let response = await api.fetchNewsFeed();
    return response.response;
  }

  async getStories() {
    let response = await api.fetchStories();
    return response.response;
  }
}
