import { createContext, useState, useContext  } from "react";

const SceneContext = createContext();

export const SceneProvider = ({children}) =>{
     const [currentScene, setCurrentScene] = useState("Kiosk Location");
     
     return(
           <SceneContext.Provider value={{currentScene, setCurrentScene}}>
              {children}
           </SceneContext.Provider>
     )
}

export const useScene = () =>useContext(SceneContext);