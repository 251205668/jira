import { formProps, User } from "constants/interface";
import { useAuth } from "Hooks/auth";
import React, { ReactNode, useEffect, useState } from "react";
import { request } from "utils/request";
import * as auth from "../auth";

export const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: formProps) => Promise<void>;
      register: (form: formProps) => Promise<void>;
      loggout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "auth-context";

// 配合初始化
const bootStrapUser = async () => {
  let currentUser = null;
  let token = auth.getToken();
  if (token) {
    let { user } = await request("me", { token });
    currentUser = user;
  }
  return currentUser;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: formProps) => auth.login(form).then(setUser);
  const register = (form: formProps) => auth.register(form).then(setUser);
  const loggout = () => auth.loogut().then(() => setUser(null));

  useEffect(() => {
    bootStrapUser().then(setUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, loggout }}
      children={children}
    />
  );
};
