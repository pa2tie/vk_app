import { observable, action } from "mobx";
import * as api from "../services/vkApi";
import { Stories } from "../models/Stories";

export default class VkStore {
  @observable username = "";
  @observable password = "";
  @observable stories = Stories.create();

  @action setUsername(username) {
    this.username = username;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setStories(stories) {
    this.stories = Stories.create({
      stories: stories
    });
  }

  async login() {
    await api.login({
      username: this.username,
      password: this.password
    });
  }

  async loadNewsFeed() {
    let response = await api.fetchNewsFeed();
    return response.response;
  }

  async loadStories() {
    let response = await api.fetchStories();
    this.setStories(response.response);
  }
}
