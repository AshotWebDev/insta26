import { createSlice } from "@reduxjs/toolkit";
import fetchPost from "./postAPI";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        data: []
    },
    reducers: {
        addComment(state, {payload: {postId, userName, body}}){
            const postIdx = state.data.findIndex(post => post.id === postId)

            state.data[postIdx].comments.push({
                id: new Date().getTime().toString(),
                userName, body
            })
        },
        addPost(state, {payload}){
           state.data.unshift(payload)
        },
        delPost(state, {payload}){
            state.data = [...payload]
        }
    },
    extraReducers: {
        [fetchPost.pending]: (state)=>{
            state.isLoading = true
        },
        [fetchPost.fulfilled]: (state, {payload})=>{
            state.isLoading = false
            state.data = [...payload]
        },
        [fetchPost.rejected]: (state)=>{
            state.isLoading = false
        }
    }
})

export const selectPost = state => state.posts

export const {addComment} = postsSlice.actions

export const postsReducer = postsSlice.reducer