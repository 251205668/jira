import React, { useState } from "react";
import { Login } from "../login";
import { Register } from "../register";
import { Card, Button } from "antd";
import "./styles/index.scss";
export const UnAuthApp = () => {
  const [isRegister, setIsRegister] = useState(false);
  return (
    <div className="un-auth-app">
      <div className="header"></div>
      <Card className="card-form">
        {isRegister ? <Register /> : <Login />}
        <Button
          type="default"
          onClick={() => {
            setIsRegister(!isRegister);
          }}
        >
          切换到{isRegister ? "登录" : "注册"}
        </Button>
      </Card>
    </div>
  );
};
