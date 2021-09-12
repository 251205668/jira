import { BASE_API_URL } from "./constants/index";
import { JIRA_TOKEN_KEY } from "constants/index";
import { formProps, User } from "constants/interface";

export const handleResponse = ({ user }: { user: User }) => {
  window.localStorage.setItem(JIRA_TOKEN_KEY, user.token || "");
  return user;
};

export const getToken = () => localStorage.getItem(JIRA_TOKEN_KEY);

export const loogut = async () => {
  window.localStorage.removeItem(JIRA_TOKEN_KEY);
};

export const login = (form: formProps) => {
  return fetch(`${BASE_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then(async (response) => {
    if (response.ok) {
      return handleResponse(await response.json());
    } else {
      return Promise.reject(form);
    }
  });
};

export const register = (form: formProps) => {
  return fetch(`${BASE_API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }).then(async (response) => {
    if (response.ok) {
      return handleResponse(await response.json());
    } else {
      return Promise.reject(form);
    }
  });
};
