import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        toggleSearchTxt(state, {payload}){
            return payload
        }
    }
})

export const selectSearch = state => state.search

export const {toggleSearchTxt} = searchSlice.actions

export const searchReducer = searchSlice.reducer