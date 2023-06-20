import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPost } from '../../store/slices/postsSlice/postsSlise'
import fetchPost from '../../store/slices/postsSlice/postAPI'
import Post from '../Post/Post'
import SpinerLoading from '../SpinerLoading/SpinerLoading'
import { selectSearch } from '../../store/slices/searchSlice/searchSlice'

function Posts() {
    const posts = useSelector(selectPost)
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!posts.data.length){
          dispatch(fetchPost())
        }
    },[])

    const filterPosts = useMemo(()=>{
      return[...posts.data.filter(post => post.name.toLowerCase().includes(search.toLowerCase()))]
            .sort((a,b)=> a.name.toLowerCase().indexOf(search) - b.name.toLowerCase().indexOf(search))
    },[posts, search])
    
  return (
    <>
        {   posts.isLoading ? <SpinerLoading/>:
            filterPosts.map(el => <Post key={el.id} comments={el.comments} id={el.id} img={el.img} name={el.name} likesCount={el.likesCount} postText={el.postText} timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts