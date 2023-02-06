import { createSlice } from "@reduxjs/toolkit";

export const LanguageSelector = createSlice({
  name: "Theme",
  initialState: {
    Language: "tr",
    Name:"Kubilay"
  },
  reducers: {
    
    changeName: (state,action) => {
        state.Name = action.payload;
    },
    changeLanguage: (state,action) => {
        state.Language = action.payload;
    },
    changeAll: (state,action) => {
        state.Language = action.payload.Lang;
        state.Name = action.payload.Name;
        
    }
    
  },
});

export const { changeName,changeAll,changeLanguage} = LanguageSelector.actions;


export const LanguageSelect = (state) => state.LanguageSelector;

export default LanguageSelector.reducer;
