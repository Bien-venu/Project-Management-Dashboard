// DataContext.js
import { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dataLength, setDataLength] = useState(0);
  const [completedTrueCount, setCompletedTrueCount] = useState(0);
  const [completedFalseCount, setCompletedFalseCount] = useState(0);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
        setIsLoading(false);
        setDataLength(result.todos.length);
        setCompletedTrueCount(
          result.todos.filter((item) => item.completed === true).length,
        );
        setCompletedFalseCount(
          result.todos.filter((item) => item.completed === false).length,
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/todos");
    const data = await response.json();
    return data;
  };
  const selectCard = (cardId) => {
    const selected = data.find((card) => card._id === cardId);
    setSelectedCard(selected);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        selectedCard,
        selectCard,
        isLoading,
        dataLength,
        completedTrueCount,
        completedFalseCount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => useContext(DataContext);
