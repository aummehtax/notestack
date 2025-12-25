import { createSlice } from "@reduxjs/toolkit";

 const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkMode: (() => {
            //initialize from localStorage on first load
            const saved = localStorage.getItem("darkMode");
            return saved !== null ? saved === "true" : true;
        })(),
    },
    reducers: {
       toggleTheme: (state) => {
            state.darkMode = !state.darkMode
            localStorage.setItem("darkMode" , state.darkMode.toString())
       },
       setTheme: (state, action) => {
            state.darkMode = action.payload
            localStorage.setItem("darkMode" , state.darkMode.toString())
       }
    }
})

export const {toggleTheme, setTheme} = themeSlice.actions
export default themeSlice.reducer

