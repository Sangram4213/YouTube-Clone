import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";


const chatSlice = createSlice({
    name:'chat',
    initialState:{
       messages:[]
    },
    reducers:{
     addMessage:(state,action)=>{
        state.messages.splice(10,OFFSET_LIVE_CHAT);
        state.messages.push(action.payload);
     }
    }

});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;