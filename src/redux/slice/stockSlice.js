import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    searchQuery: ''
}

export const StockSlice = createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        addStock: (state, action) => {
            console.log("🚀 ~ state:", state)
            console.log("🚀 ~ action:", action)
            state.items.push(action.payload)
        },
        deleteStock: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    }
});

export const { addStock, deleteStock, setSearchQuery } = StockSlice.actions;

export default StockSlice.reducer;