import { configureStore } from "@reduxjs/toolkit";
import StockReducer from "./slice/stockSlice"

const store = configureStore({
    devTools: true,
    reducer: {
        stocks: StockReducer
    }
})
export default store;