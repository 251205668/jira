import { formProps, User } from "constants/interface";
import React, { ReactNode, useState } from "react";
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: formProps) => auth.login(form).then(setUser);
  const register = (form: formProps) => auth.register(form).then(setUser);
  const loggout = () => auth.loogut().then(() => setUser(null));
  return (
    <AuthContext.Provider
      value={{ user, login, register, loggout }}
      children={children}
    />
  );
};
