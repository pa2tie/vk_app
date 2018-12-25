import { observable, action } from "mobx";
import { postRequest } from "../services/HttpService";

export default class MercuryStore {
  @observable email = "";
  @observable password = "";
  @observable photoUrl = "";
  @observable userName = "";

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setPhotoUrl(photoUrl) {
    this.photoUrl = photoUrl;
  }

  @action setUserName(userName) {
    this.userName = userName;
  }

  async loginRequest() {
    const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
    const payload = {
      email: this.email,
      password: this.password
    };
    return postRequest({ url, payload });
  }
}
