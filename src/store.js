import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/counterslice'
import ThemeReducer from "./ThemeSlice";
import LanguageSelectorReducer from './LanguangeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    ThemeSlices:ThemeReducer,
    LanguageSelector:LanguageSelectorReducer
    
  },
});
