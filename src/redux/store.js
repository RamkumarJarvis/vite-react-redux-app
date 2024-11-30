import { configureStore } from "@reduxjs/toolkit";
import PizzaReducer from "./slice/pizzaSlice"

const store = configureStore({
    devTools: true,
    reducer: {
        pizzas: PizzaReducer
    }
})
export default store;