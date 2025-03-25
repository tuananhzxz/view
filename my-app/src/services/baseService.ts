import axios from "axios";
import { ACCESS_TOKEN, BASE_URL } from "../ultil/config";

export class baseService {
  put = (url: string, model: unknown) => {
    return axios({
      url: `${BASE_URL}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  };

  post = (url: string, model: unknown) => {
    return axios({
      url: `${BASE_URL}/${url}`,
      method: "POST",
      data: model,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  };

  get = (url: string) => {
    return axios({
      url: `${BASE_URL}/${url}`,
      method: "GET",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  };

  delete = (url: string) => {
    return axios({
      url: `${BASE_URL}/${url}`,
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      },
    });
  };
}

