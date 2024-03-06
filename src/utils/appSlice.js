import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuopen:false
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuopen =!state.isMenuopen
        }
    }
})

export const {toggleMenu} =appSlice.actions;
export default appSlice.reducer;