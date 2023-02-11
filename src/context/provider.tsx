import { useState } from 'react';
import Context from './context';

export default function Provider({ children }:any) {
  const [apiResponse, setApiResponse] = useState({});

  const valueContext = {
    apiResponse,
    setApiResponse,
  };

  return (
    <Context.Provider value = { valueContext }>
      { children }
    </Context.Provider>
  );
}
