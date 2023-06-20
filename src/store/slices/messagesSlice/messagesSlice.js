import { createSlice } from "@reduxjs/toolkit";

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        allMessages: [],
        activeUserId: null,
        currentDialog: []
    },
    reducers: {
        toggleActiveUser(state, {payload:{ toId, fromId}}){
            state.activeUserId = toId
            state.currentDialog = state.allMessages.filter(message => message.toId === toId && message.fromId === fromId || message.toId === fromId && message.fromId  === toId)
        },
        resetActiveUser(state){
            state.activeUserId =  null
            state.currentDialog = []
        },
        addMessage(state, {payload:{fromId, body, toId}}){
            const newMessage = {
                id: new Date().getTime().toString(),
                toId: state.activeUserId,
                fromId, body
            }
            state.allMessages.push(newMessage)
            state.currentDialog.push(newMessage)
        }
    }
})

export const selectMessages = state => state.messages
 
export const {toggleActiveUser, addMessage, resetActiveUser} = messagesSlice.actions

export const messagesReducer = messagesSlice.reducer
