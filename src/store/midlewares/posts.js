import { useMemo } from "react"

export const addPost = ({getState, dispatch}) => (next) => (action) =>{
    if(action.type === 'addPost'){
        const newPost = {
            id: new Date().getTime().toString(),
            img: action.payload.img,
            name: getState().users.currentUser.username,
            likesCount: Math.round(Math.random() * 200 + 700),
            postText: action.payload.desc,
            timeAgo: Math.round(Math.random() * 7 + 2),
            comments:[]
        }
        
        dispatch({type: 'posts/addPost', payload: {...newPost}})
        dispatch({type: 'users/addPost', payload: {...newPost}})
        return
    }
    next(action)
}

export const delPost = ({getState, dispatch}) => (next) => (action) =>{
    if(action.type === 'delPost'){
        const delAcountPost = [...getState().users.currentUser.posts.filter(post => post.id !== action.payload)]
        const delHomePagePost = [...getState().posts.data.filter(post => post.id !== action.payload)]
        dispatch({type: 'posts/delPost', payload: delHomePagePost})
        dispatch({type: 'users/delPost', payload: delAcountPost})
        return
    }

    next(action)
}