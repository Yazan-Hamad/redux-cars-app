import {configureStore} from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./carsSlice";
import { formReducer, changeCost, changeName } from "./formSlice";
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export {
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
}