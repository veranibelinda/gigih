import React, { useState, useContext, createContext } from "react";

const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const isLoading = useState(true);
  const [user] = useState(null);
  
  //const signin = ({ email, password, callback }) => {
    //return firebase
      //.auth()
      //.signInWithEmailAndPassword(email, password)
      //.then((response) => {
        //setUser(response.user);
        //callback();
        //return response.user;
      //});
  //};

  // Return the user object and auth methods
  return {
    isLoading,
    user,
    // signin,
  };
}
