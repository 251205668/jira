import { request } from "utils/request";
import { useAuth } from "./auth";
export const useRequest = () => {
  const { user } = useAuth();
  return (...[url, config]: Parameters<typeof request>) =>
    request(url, { ...config, token: user?.token });
};
