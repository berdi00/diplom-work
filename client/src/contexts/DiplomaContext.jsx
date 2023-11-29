import { createContext, useContext } from "react";
import { useAsync } from "../hooks/useAsync";
import { getDiplomas } from "../services/requests";

const Context = createContext();

export const useDiploma = () => {
  return useContext(Context);
};

export const DiplomaProvider = ({ children }) => {
  const { isLoading, error, value: diplomas } = useAsync(getDiplomas);

  return (
    <Context.Provider value={{ diplomas }}>
      {isLoading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1 style={{ color: "red" }}>Error</h1>
      ) : (
        children
      )}
    </Context.Provider>
  );
};
