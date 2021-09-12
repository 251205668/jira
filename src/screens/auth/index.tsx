import { useAuth } from "Hooks/auth";
import React from "react";
import { Search } from "./search";

export const AuthApp = () => {
  const { loggout } = useAuth();
  return (
    <div>
      <Search />
      <button onClick={loggout}>登出</button>
    </div>
  );
};
