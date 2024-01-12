import React, { useEffect, useState } from 'react';

import AuthContext from '../context/AuthContext';

// Signout method
export const signOut = () => {
  localStorage.removeItem('user');
};

// Track  logged in user method
export const getCurrentUser = () => JSON.parse(localStorage.getItem('user'));

// Setting user as the current logged in user, to access the pages
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState('user undefined!');

  useEffect(() => {
    // Assign current user to a variable currentUser.
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);
  console.log('THIS IS THE USERR');
  console.log(user);
  const contextValue = { user, setUser };
  console.log('THIS IS THE USERR');

  //  When no user found in local storage, render nothing, return null, otherwise return context value.
  return isLoading ? null : (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
