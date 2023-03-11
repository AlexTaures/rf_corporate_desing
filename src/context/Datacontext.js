import React, { createContext, useState } from 'react';


export const DataContext = createContext();




export const DataProvider =  ( {children} ) => {
    const [menu, setMenu] = useState(false);
    const [menuText, setMenuText] = useState('menu');
    const [color, setColor] = useState("white");
    const [inHome, setInHome] = useState(true)
    

      //console.log(data);
    return (
        <DataContext.Provider value={{
            menu, setMenu,
            menuText,setMenuText,
            color, setColor,
            inHome, setInHome
        }} >
            { children }
        </DataContext.Provider>
    )
}