import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "./slices/postsSlice/postsSlise"
import { usersReducer } from "./slices/usersSlice/usersSlice"
import { searchReducer } from "./slices/searchSlice/searchSlice"
import { messagesReducer } from "./slices/messagesSlice/messagesSlice"
import { addPost, delPost } from "./midlewares/posts"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer,
    search: searchReducer,
    messages: messagesReducer,
})

const persistConfig = {
    key: 'insta26',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMidlewares)=>[
        ...getDefaultMidlewares({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
          }),addPost, delPost
    ]
})

export const persistor = persistStore(store)
export default store