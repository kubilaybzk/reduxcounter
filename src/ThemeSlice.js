import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    darkthema: false,
  },
  reducers: {
    
    changeTheme: (state) => {
      state.darkthema = !state.darkthema;
    },
    
  },
});

export const { changeTheme } = ThemeSlice.actions;


export const Theme = (state) => state.ThemeSlices.darkthema;

export default ThemeSlice.reducer;
