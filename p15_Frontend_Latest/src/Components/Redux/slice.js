import { createSlice } from "@reduxjs/toolkit";
/*
createSlice is a function that creates a "slice" of the state with:
A name (here: "logged")
Initial state (starting values for the slice)
Reducers (functions to update the state)



 */

export const loggedSlice = createSlice({
  name: "logged",

  initialState: {
    isLoggedIn: false,
    data: {},
    searchData: "",
    toggle: false,
    // isEdit: false,
  },

  reducers: {
    login: (state, data) => {
      console.log("Payload ", data);
      state.isLoggedIn = true;
      state.data = data.payload;
      // state = { ...state, data: data.payload, isLogged: true };
    },
    logout: (state, data) => {
      state.isLoggedIn = false;
      state.data = data.payload;
      state.toggle = false;
    },
    search: (state, data) => {
      state.searchData = data.payload;
    },
    Togg: (state, data) => {
      state.toggle = data.payload;
    },
    Edit: (state) => {
      state.isEdit = !state.isEdit;
    },
  },
});

export const { login, logout, search, Togg, Edit } = loggedSlice.actions;
export default loggedSlice.reducer; // Export the reducer
