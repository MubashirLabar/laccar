import { createSlice } from "@reduxjs/toolkit";
// import { getFromStorage } from "utiles/common";
// const token = getFromStorage("user_token");
const token = null;

const authReducer = createSlice({
  name: "authReducer",
  initialState: {
    token: token
      ? token
      : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MjY4MjM5MzQsImV4cCI6MTcyNjgyNzUzNCwidXNlcl9pZCI6IjcifQ.UO62qomp0QIdZRotMowMgWj8PmnAWSMSMqa5jKlhOgU",
    isUser: token ? true : false,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsUser: (state, action) => {
      state.isUser = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("user_token");
      state.token = null;
      state.isUser = false;
    },
  },
});
export const { setToken, setIsUser, logout } = authReducer.actions;
export default authReducer.reducer;
