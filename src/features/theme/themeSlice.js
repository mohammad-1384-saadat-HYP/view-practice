import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleThemeState: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setTheme, toggleThemeState } = themeSlice.actions;

export const selectTheme = (state) => state.theme.theme;

export default themeSlice.reducer;
