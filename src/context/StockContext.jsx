import { createContext, useContext } from "react";
import { useSelector } from "react-redux";


const StockContext = createContext();

export const StockProvider = ({ children }) => {
    const stocksList = useSelector(state => state.stocks.items);
    const searchQuery = useSelector(state => state.stocks.searchQuery);

    const filteredStocks = stocksList.filter(stock => 
        stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        stock.price.toString().includes(searchQuery.toLowerCase())
    );

    return(
        <StockContext.Provider value={{filteredStocks, searchQuery}}>
            {children}
        </StockContext.Provider>
    );
};

export const useStockContext = () => {
    return useContext(StockContext);
};