import { configureStore } from "@reduxjs/toolkit";
import loggedSlice from "./slice"; // Import the slice

export default configureStore({
  reducer: {
    logged: loggedSlice, // Use the slice's reducer
  },
});
