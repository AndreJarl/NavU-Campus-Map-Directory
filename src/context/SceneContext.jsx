import { createContext, useState, useContext  } from "react";

const SceneContext = createContext();

export const SceneProvider = ({children}) =>{
     const [currentScene, setCurrentScene] = useState("Main Gate");
     
     return(
           <SceneContext.Provider value={{currentScene, setCurrentScene}}>
              {children}
           </SceneContext.Provider>
     )
}

export const useScene = () =>useContext(SceneContext);