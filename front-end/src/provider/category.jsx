import React, {useState} from 'react';

export const CategoryContext = React.createContext();

export default function CatergoryProvider({children}) {
  const [buttonText, setButtonText] = useState("fruit");
  return (
    <CategoryContext.Provider value={{buttonText, setButtonText}}>
      {children}
    </CategoryContext.Provider>
  )
}

