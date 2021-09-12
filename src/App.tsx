import { useAuth } from "Hooks/auth";
import React from "react";
import { AuthApp } from "screens/auth";
import { UnAuthApp } from "screens/unAuth";

function App() {
  const { user } = useAuth();
  return user ? <AuthApp /> : <UnAuthApp />;
}

export default App;
