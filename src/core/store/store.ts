import { configureStore } from "@reduxjs/toolkit";
import bag from '../reducers/bagSlice';

const store = configureStore({
    reducer: {bag},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;