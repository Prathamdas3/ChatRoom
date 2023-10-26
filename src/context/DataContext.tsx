'use client';
import React, { useState, createContext, useContext } from 'react';

type ApiType = {
  isUser?: boolean;
  setIsUser?: React.Dispatch<React.SetStateAction<boolean>>;
  userName?: string | null | undefined;
  setUserName?: React.Dispatch<React.SetStateAction<string | null | undefined>>;
};
type childT = {
  children: React.ReactNode;
};

export const apiContext = createContext<ApiType | null>(null);
export const ApiProvider = ({ children }: childT) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null | undefined>('');
  const data = { isUser, setIsUser, userName, setUserName };

  // localStorage.setItem('userName', userName);
  return <apiContext.Provider value={data}>{children}</apiContext.Provider>;
};

export const useApiContextProvider = () => {
  const contextData = useContext(apiContext);
  if (!contextData) {
    throw new Error('context must be used inside the provider');
  }
  return contextData;
};
