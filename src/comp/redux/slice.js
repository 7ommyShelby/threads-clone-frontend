import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: localStorage.getItem('usertoken') ? true : false,
    usertoken: localStorage.getItem('usertoken'),
    userfeeds: [],
    refresh: false,
    user : {} 
}



export const threadslice = createSlice({
    name: "threads",
    initialState,
    reducers: {
        setusertoken: (state, action) => {
            state.usertoken = action.payload
            localStorage.setItem('usertoken', action.payload);
        },
        setdata: (state, action) => {
            state.userdata = action.payload
        },
        setstatus: (state, action) => {
            state.status = action.payload
        },
        setfeeds: (state, action) => {
            state.userfeeds = action.payload
        },
        getrefresh: (state) => {
            state.refresh = !state.refresh
        },
        setuser : (state, action)=>{
            console.log(action.payload);
            state.user = action.payload
        }
    }
})

export const { setuser, setdata, setstatus, setfeeds, getrefresh } = threadslice.actions;
export default threadslice.reducer