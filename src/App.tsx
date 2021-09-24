import { useAuth } from "Hooks/auth";
import React from "react";
import "./App.scss";
import { AuthApp } from "screens/auth";
import { UnAuthApp } from "screens/unAuth/index";

function App() {
  const { user } = useAuth();
  return <div className="App">{user ? <AuthApp /> : <UnAuthApp />}</div>;
}

export default App;
