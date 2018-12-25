import axios from "axios";

async function postRequest({ url, payload }) {
  return axios
    .post(url, payload)
    .then(res => {
      return res.data;
    })
    .catch(error => {
      let res = { error: null };
      if (error.response) {
        res = error.response.data;
        res["status"] = error.response.status;
      }
      return Promise.reject(res);
    });
}

export { postRequest };
