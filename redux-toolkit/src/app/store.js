import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import numberReducer from "../features/number/numberSlice";
import logger from "redux-logger";
import usersReducer from "../features/users/usersSlice"

const store = configureStore({
  reducer: {
    counter: counterReducer,
    number: numberReducer,
    users:usersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
