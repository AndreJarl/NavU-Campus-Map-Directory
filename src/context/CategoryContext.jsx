import { createContext, useState, useContext } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({children}) =>{
  const [category, setCategory] = useState({
          Restroom: false,
          Sports: false,
          Admin: false,
          Laboratory: false,
          Food: false
        });

     return(
         <CategoryContext.Provider value={{category, setCategory}}>
             {children}
         </CategoryContext.Provider>
     )
}

export const useCategory = () => useContext(CategoryContext);

