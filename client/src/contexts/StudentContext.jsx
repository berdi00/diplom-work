import { createContext, useContext } from "react";
import { useAsync } from "../hooks/useAsync";
import { getStudents } from "../services/requests";

const Context = createContext();

export const useStudent = () => {
  return useContext(Context);
};

export const StudentProvider = ({ children }) => {
  const { isLoading, error, value: students } = useAsync(getStudents);

  return (
    <Context.Provider value={{ students }}>
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
