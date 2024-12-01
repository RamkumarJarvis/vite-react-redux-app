import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            "name": "StarBright Electronics",
            "desc": "Advanced consumer tech accessories",
            "price": "129.99",
            "quantity": "42",
            "id": "a3f5e7b2-6c1d-4e09-9b3a-7f0d2c8e1a4f"
        },
        {
            "name": "GreenLeaf Organic Seeds",
            "desc": "Premium non-GMO garden seed collection",
            "price": "24.50",
            "quantity": "156",
            "id": "c9d1a5e3-2b6f-47d8-9f1c-5e0b7a4d3c2e"
        },
        {
            "name": "CozyCraft Textiles",
            "desc": "Handwoven artisan throw blankets",
            "price": "89.75",
            "quantity": "27",
            "id": "b4c7d2f1-8e3a-45b6-9d0c-2f1e5a9b6c3d"
        },
        {
            "name": "TechWave Innovations",
            "desc": "Cutting-edge wireless charging solutions",
            "price": "54.99",
            "quantity": "83",
            "id": "e6f2a1c5-9d3b-47e1-8b6f-4c2d7a0b5e9c"
        },
        {
            "name": "Nature's Pantry Supplements",
            "desc": "Organic herbal wellness blends",
            "price": "39.25",
            "quantity": "64",
            "id": "f1d5c7b3-4e2a-46d9-9c6b-7a0f3e1d2b8c"
        }
    ],
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