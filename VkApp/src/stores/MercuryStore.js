import { observable, action } from "mobx";

export default class MercuryStore {
  @observable email = "";
  @observable password = "";
  @observable userImageUrl = "";
  @observable userName = "";

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setUserImageUrl(userImageUrl) {
    this.userImageUrl = userImageUrl;
  }

  @action setUserName(userName) {
    this.userName = userName;
  }

  async loginRequest() {
    const url = "https://us-central1-mercdev-academy.cloudfunctions.net/login";
  }
}
