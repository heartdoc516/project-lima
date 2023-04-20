import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const SetUserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export function useUser() {
  return [useContext(UserContext), useContext(SetUserContext)];
}
