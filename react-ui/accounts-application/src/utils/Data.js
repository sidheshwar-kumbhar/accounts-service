import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);

    const dataCache = (userData) => {
        (userData) && setData(JSON.stringify(userData));
    };

    const getDataCache = () => {
        return JSON.parse(data);
    };

    const value = { data, dataCache, getDataCache };
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}

// Custom hook to access the data context
const useData = () => {
    return useContext(DataContext);
};

export { DataProvider, useData };
