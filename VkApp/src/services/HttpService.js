import axios from "axios";

async function postRequest({ url, payload }) {
  axios
    .post(url, payload)
    .then(res => {
      return res;
    })
    .catch(error => {
      return error;
    });
}

export { postRequest };
