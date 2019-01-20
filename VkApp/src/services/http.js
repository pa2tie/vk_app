import axios from "axios";
import snakeCaseKeys from "snakecase-keys";
import camelCaseKeys from "camelcase-keys";

export function get(url, options) {
  return axios
    .get(url, snakeCaseKeys(options, { deep: true }))
    .then(response => camelCaseKeys(response.data, { deep: true }))
    .catch(error => {
      if (error.response && error.response.data) {
        throw camelCaseKeys(error.response.data, { deep: true });
      } else {
        throw error;
      }
    });
}
