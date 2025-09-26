import { createContext, useState, useContext } from "react";

const FloorContext = createContext();

export const FloorProvider = ({children}) =>{
    const [currentFloor, setCurrentFloor] = useState(1);

     return(
         <FloorContext.Provider value={{currentFloor, setCurrentFloor}}>
             {children}
         </FloorContext.Provider>
     )
}

export const useFloorQuery = () => useContext(FloorContext);

