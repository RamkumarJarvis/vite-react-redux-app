import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const PizzaSlice = createSlice({
    name: 'Pizzas',
    initialState,
    reducers: {
        addPizza: (state, action) => {
            console.log("🚀 ~ state:", state)
            console.log("🚀 ~ action:", action)
            state.items.push(action.payload)
        },
        deletePizza: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
});

export const { addPizza, deletePizza } = PizzaSlice.actions;

export default PizzaSlice.reducer;