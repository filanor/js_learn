import axios from "axios";
import { toast } from "react-toastify";
import configFile from "../config.json";
import localStorageService from "./localStorage.service";
import { httpAuth } from "../hooks/useAuth";

const http = axios.create({
  baseURL: configFile.apiEndpoint
});

function transformData(data) {
  return data && !data._id
    ? Object.keys(data).map((key) => ({ ...data[key] }))
    : data;
}

http.interceptors.request.use(
  async function (config) {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";

      const expireDate = localStorageService.getTokenExpireDate();
      const refreshToken = localStorageService.getRefreshToken();
      if (refreshToken && expireDate < Date.now()) {
        const { data } = await httpAuth.post(`${configFile.refreshToken}`, {
          grant_type: "refresh_token",
          refresh_token: refreshToken
        });

        localStorageService.setTokens({
          refreshToken: data.refresh_token,
          idToken: data.id_token,
          localId: data.user_id,
          expiresIn: data.expires_in
        });
      }
    }

    const accessToken = localStorageService.getAccessToken();
    config.params = { ...config.params, auth: accessToken };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) };
    }
    return res;
  },
  function (error) {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedError) {
      console.log(error);
      toast.error("Что-то пошло не так. Попробуйте позже");
    }

    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete
};

export default httpService;
