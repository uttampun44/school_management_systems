import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isToggle:false
}

export const schoolSlice = createSlice({
    name: "school",
    initialState,
    reducers: {
        hamburger:(state) => {
            state.isToggle = !state.isToggle
        },
        
    }
})

export const {hamburger} = schoolSlice.actions
export default schoolSlice.reducer