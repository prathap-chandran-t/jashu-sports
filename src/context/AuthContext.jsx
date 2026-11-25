
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("jashu-current-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (user) => {
    localStorage.setItem("jashu-current-user", JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem("jashu-current-user");
    setCurrentUser(null);
  };

  const updateProfile = (updatedData) => {
    const updatedUser = {
      ...currentUser,
      ...updatedData,
    };

    // Update current logged-in user
    localStorage.setItem(
      "jashu-current-user",
      JSON.stringify(updatedUser)
    );

    // Update registered users list
    const existingUsers = JSON.parse(
      localStorage.getItem("jashu-users") || "[]"
    );

    const updatedUsers = existingUsers.map((user) =>
      user.email === currentUser.email
        ? updatedUser
        : user
    );

    localStorage.setItem(
      "jashu-users",
      JSON.stringify(updatedUsers)
    );

    setCurrentUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
