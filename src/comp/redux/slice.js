import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: localStorage.getItem('usertoken') ? true : false,
    usertoken: localStorage.getItem('usertoken'),
    userfeeds: [],
    refresh: false,
    userid : "" 
}

export const threadslice = createSlice({
    name: "threads",
    initialState,
    reducers: {
        setuser: (state, action) => {
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
        setuserid : (state, action)=>{
            state.userid = action.payload
        }
    }
})

export const { setuser, setdata, setstatus, setfeeds, getrefresh } = threadslice.actions;
export default threadslice.reducer