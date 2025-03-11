import { configureStore } from "@reduxjs/toolkit";
import { myApi } from "./api";
import { myReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    // This is the Redux's root reducer. It contains various slice reducers.
    // myApi: myApi.reducer,
    // myReducer: myReducer.reducer,
    // Below is the alternate way of adding generated reducers as slices to the store
    [myApi.reducerPath]: myApi.reducer,
    [myReducer.name]: myReducer.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

// NOTE: You must add the middleware in the Redux store for RTK-Query to function correctly.
// getDefaultMiddleware returns an array of some default middlewares provided by RTK Query.
// On it we use concat method to add our middleware to the list
