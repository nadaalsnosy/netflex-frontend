import { createContext, useEffect, useState } from "react";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [token, setToken] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    const localUser = localStorage.getItem("user");
    try {
      if (localToken) {
        setToken(localToken);
      } else {
        setToken(auth.token);
      }
      if (localUser) {
        setUser(JSON.parse(localUser));
      } else {
        setUser(auth.user);
      }
    } catch (error) {
      console.log(error);
    }
  }, [auth]);
  console.log(auth);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
