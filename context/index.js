import { createContext, useEffect, useState } from 'react';

// create context
const Context = createContext();

// context provider
const Provider = ({ children }) => {
  const [lang, setLang] = useState('eng');

  return (
    <Context.Provider value={{ lang, setLang }}>{children}</Context.Provider>
  );
};
export { Context, Provider };
