import React from 'react';
import { StockProvider } from "../context/StockContext";
import SearchBox from "./searchBox";
import TableView from "./tableVIew";


export default function StockView() {
    return (
        <StockProvider>
            <div className="p-32 bg-white">
                <SearchBox />
                <TableView />
            </div>
        </StockProvider>
    )
}