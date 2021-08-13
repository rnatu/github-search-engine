import { createContext, ReactNode, useState } from "react";
// import { api } from "../services/api";

type AuthContextType = {
  setUsername: (text: string) => void;
};

type AuthContextProviderType = {
  children: ReactNode;
};

//Criação do contexto AuthContext
export const UserContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [username, setUsername] = useState(""); //undefined

  if (username !== "") {
    // api.get(`https://api.github.com/users/${username}`).then((response) => console.log(response.data))
    console.log(username)
  }



  return (
    //provider do contexto AuthContext
    <UserContext.Provider value={{ setUsername }}>
      {children}
    </UserContext.Provider>
  );
}
