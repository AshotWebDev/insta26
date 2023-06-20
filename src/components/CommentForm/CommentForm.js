import React, { memo, useRef } from 'react'
import IMAGES from '../../images'
import { useDispatch, useSelector } from 'react-redux'
import { addComment } from '../../store/slices/postsSlice/postsSlise'
import { selectUsers } from '../../store/slices/usersSlice/usersSlice'

function CommentForm({id}) {
    const {currentUser} = useSelector(selectUsers)
    const formRef = useRef(null)
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        if(formRef.current[0].value){
            dispatch(addComment({
                postId: id,
                userName: currentUser.username,
                body: formRef.current[0].value
            }))
        }
        formRef.current.reset()
    }
  return (
    <form ref={formRef}  onSubmit={handleSubmit}>
        <div className="comment-wrapper">
            <img src={IMAGES.smile} className="icon" alt=""/>
            <input type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </div>
    </form>
  )
}

export default memo(CommentForm)