import { observable, action } from "mobx";
import * as api from "../services/api";

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
    return await api.fetchNewsFeed();
  }
}
