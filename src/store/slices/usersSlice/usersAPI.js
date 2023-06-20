import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import IMAGES from "../../../images";
import { convertCount } from "../../../helperFuncktion/helperFuncktion";

const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
        const {data: usersData} = await axios.get('https://jsonplaceholder.typicode.com/users')
        const {data: postsData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')
    
        const data = usersData.map(user => ({
            id: user.id.toString(),
            name: user.name,
            username:  user.username.toLowerCase(),
            email: user.email,
            password: user.address.suite.replaceAll(' ', ''),
            avatar:  IMAGES.avatar,
            followers: convertCount(Math.round(Math.random() * 1000000 + 700)),
            following: convertCount(Math.round(Math.random() * 700 + 500)),
            bio: user.company.catchPhrase.repeat(3),
            posts: [
                ...postsData.filter(post => post.albumId === user.id)
                            .map(post => ({
                                id: post.id.toString(),
                                img: post.url,
                                name: user.username,
                                likesCount: Math.round(Math.random() * 200 + 700),
                                postText: post.title.slice(post.title.indexOf(' ')),
                                timeAgo: Math.round(Math.random() * 7 + 2),
                                comments: []
                            }))
            ]
        }))
        return  data
    }
)

export default fetchUsers