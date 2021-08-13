import { createContext, ReactNode, useState } from "react";
// import { api } from "../services/api";



type AuthContextType = {
  setUsername: (text: string) => void;
  usernametest: string;
};

type AuthContextProviderType = {
  children: ReactNode;
};

//Criação do contexto AuthContext
export const UserContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [username, setUsername] = useState("");

  const usernametest = username
  // async function getUserData() {
  //   const { data } = await api.get(`https://api.github.com/users/${username}`);
  //   const filteredData = {
  //     name: data.name,
  //     location: data.location,
  //     bio: data.bio,
  //     avatar_url: data.avatar_url,
  //     url: data.url,
  //   };

  //   setUserData(filteredData);
  // }

  return (
    //provider do contexto AuthContext
    <UserContext.Provider value={{ setUsername, usernametest }}>
      {children}
    </UserContext.Provider>
  );
}
