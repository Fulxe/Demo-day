import React, {useState} from 'react';

export const CategoryContext = React.createContext();

export default function CatergoryProvider({children}) {
  const [buttonText, setButtonText] = useState("fruit");
  const [id , setId] = useState("") 
  const [user, setUser] = useState({});
  

  return (
    <CategoryContext.Provider value={{buttonText, setButtonText, user,setUser , id,setId}}>
      {children}
    </CategoryContext.Provider>
  )
}

