import { createSlice } from "@reduxjs/toolkit";

 const eyeToggleSlice = createSlice({
    name: "eye",
    initialState: false,
    reducers: {
       eyeToggle: (state) => state = !state,
    },
})

export const {eyeToggle} = eyeToggleSlice.actions
export default eyeToggleSlice.reducer

