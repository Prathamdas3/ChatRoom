'use client';
import React, { useState, useEffect, createContext } from 'react';
export const apiContext = createContext({});
export default function ApiState(props: any) {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const data = { isUser, setIsUser, userName, setUserName };

  localStorage.setItem('userName', userName);
  return (
    <apiContext.Provider value={data}>{props.children}</apiContext.Provider>
  );
}
