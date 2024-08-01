import React, { useReducer } from 'react';
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const login = (username, password) => {
    if (username === 'user' && password === 'pass') {
      const user = { id: 'abc', name: username };
      const action = { type: types.login, payload: user };

      localStorage.setItem('user', JSON.stringify(user));

      dispatch(action);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('user');
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider value={{
      ...state,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};
