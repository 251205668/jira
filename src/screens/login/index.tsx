import React, { FormEvent } from "react";
const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Login = () => {
  /**
   *
   * @param event 传入的事件类型为FormEvent<HTMLFormElement>
   */
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    const loginParams = { username, password };
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginParams),
    }).then((response) => {
      if (response.ok) {
        console.log("登录成功");
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">用户名:</label>
          <input type="text" id={"username"} />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input type="text" id={"password"} />
        </div>
        <button type="submit">登录</button>
      </form>
    </div>
  );
};
