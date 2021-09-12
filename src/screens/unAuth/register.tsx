import { useAuth } from "Hooks/auth";
import React, { FormEvent } from "react";
export const Register = () => {
  /**
   *
   * @param event 传入的事件类型为FormEvent<HTMLFormElement>
   */
  const { user, register } = useAuth();
  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    const loginParams = { username, password };
    register(loginParams);
  };

  return (
    <div>
      {user?.name ? <div>{user.name + user.token}</div> : null}
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">用户名:</label>
          <input type="text" id={"username"} />
        </div>
        <div>
          <label htmlFor="password">密码:</label>
          <input type="text" id={"password"} />
        </div>
        <button type="submit">注册</button>
      </form>
    </div>
  );
};
