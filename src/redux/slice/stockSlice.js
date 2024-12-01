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
            state.items.push(action.payload)
        },
        deleteStock: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        updateStock:(state,action)=>{
            const updatedStock = action.payload;
            const index = state.items.findIndex(stock => stock.id === updatedStock.id);
            if (index !== -1) {
                state.items[index] = updatedStock;
            }
        }
    }
});

export const { addStock, deleteStock, setSearchQuery, updateStock } = StockSlice.actions;

export default StockSlice.reducer;