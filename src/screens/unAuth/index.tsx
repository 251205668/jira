import React, { useState } from "react";
import { Login } from "./login";
import { Register } from "./register";

export const UnAuthApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsRegister(!isRegister);
        }}
      >
        切换到{isRegister ? "登录" : "注册"}
      </button>
      {isRegister ? <Register /> : <Login />}
    </div>
  );
};
