import { createContext, useState, useContext } from "react";

const PathContext = createContext();

export const PathProvider = ({children})=>{
      const [path, setPath] = useState("");

      return(
          <PathContext.Provider value={{path, setPath}}>
               {children}
          </PathContext.Provider>
    )
}

export const usePath = () => useContext(PathContext);