import { useAuth } from "./../Hooks/auth";
import { BASE_API_URL } from "constants/index";
import { HttpConfig } from "constants/interface";
import * as qs from "qs";
export const request = async (
  url: string,
  { data, token, headers, ...customConfig }: HttpConfig = {}
) => {
  const config: HttpConfig = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };
  if (config.method?.toUpperCase() === "GET") {
    url += "?" + qs.stringify(data);
  } else {
    config.body = JSON.stringify(data);
  }
  return window
    .fetch(`${BASE_API_URL}/${url}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        const { loggout } = useAuth();
        loggout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      } else {
        const data = await response.json();
        if (response.ok) {
          return data;
        } else {
          return Promise.reject(data);
        }
      }
    });
};
