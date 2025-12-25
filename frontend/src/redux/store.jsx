import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "./slices/themeSlice"
import eyeReducer from "./slices/eyeToggleSlice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    eye: eyeReducer,
  },
})